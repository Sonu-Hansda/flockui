#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Initialize variables
COMPONENT=""
VARIANT=""

# Parse arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        -Component|-component|-c|--Component) COMPONENT="$2"; shift ;;
        -Variant|-variant|-v|--Variant) VARIANT="$2"; shift ;;
        *) echo "Unknown parameter passed: $1" >&2; exit 1 ;;
    esac
    shift
done

# Get paths
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RENDERER_PATH="$ROOT_DIR/renderer"
REGISTRY_PATH="$ROOT_DIR/registry"
BUILD_TEMP="$ROOT_DIR/build-temp"
ENV_PATH="$ROOT_DIR/.env.local"

# Safety check if the component or variant is not passed
if [ -z "$COMPONENT" ] || [ -z "$VARIANT" ]; then
    echo "Both -Component and -Variant are required" >&2
    exit 1
fi

SOURCE_FILE="$REGISTRY_PATH/$COMPONENT/$VARIANT/${COMPONENT}_${VARIANT}.dart"

if [ ! -f "$SOURCE_FILE" ]; then
    echo "Component source file not found: $SOURCE_FILE" >&2
    exit 1
fi

RENDERER_TARGET="$RENDERER_PATH/lib/component.dart"

# Copy the file
cp -f "$SOURCE_FILE" "$RENDERER_TARGET"

OUTPUT_PATH="$BUILD_TEMP/$COMPONENT/$VARIANT"

# Function to get environment variables securely
get_env_value() {
    local key=$1
    if [ -f "$ENV_PATH" ]; then
        # Use grep and sed to extract value, removing surrounding whitespace, quotes, and carriage returns
        grep -E "^${key}=" "$ENV_PATH" | cut -d '=' -f 2- | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//' -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//" | tr -d '\r'
    fi
}

# Get environment variables
if [ -f "$ENV_PATH" ]; then
    R2_ACCOUNT_ID=$(get_env_value "R2_ACCOUNT_ID")
    R2_BUCKET_NAME=$(get_env_value "R2_BUCKET_NAME")
    R2_ACCESS_KEY_ID=$(get_env_value "R2_ACCESS_KEY_ID")
    R2_SECRET_ACCESS_KEY=$(get_env_value "R2_SECRET_ACCESS_KEY")
else
    echo ".env.local file NOT found!"
fi

# Navigate to renderer path
pushd "$RENDERER_PATH" > /dev/null

# Build the component
flutter build web --release --output "$OUTPUT_PATH" --base-href "/previews/$COMPONENT/$VARIANT/"

# Return to previous directory
popd > /dev/null

# Upload the built component to R2
export AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"

BUCKET_PATH="s3://$R2_BUCKET_NAME/previews/$COMPONENT/$VARIANT"

aws s3 sync "$OUTPUT_PATH" "$BUCKET_PATH" \
    --endpoint-url "https://$R2_ACCOUNT_ID.r2.cloudflarestorage.com" \
    --no-progress
