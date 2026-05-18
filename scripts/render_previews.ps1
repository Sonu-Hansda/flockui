# Get Component and Variant name
param(
    [string]$Component = "",
    [string]$Variant = "",
    [bool]$PushToR2 = $false
)

# Function to get environment variables
function Get-EnvValue {
    param([string]$key)

    $line = $envContent | Where-Object { $_ -match "^$key=" }

    if ($line) {
        $value = ($line -split "=", 2)[1].Trim()

        if (
            ($value.StartsWith('"') -and $value.EndsWith('"')) -or
            ($value.StartsWith("'") -and $value.EndsWith("'"))
        ) {
            $value = $value.Substring(1, $value.Length - 2)
        }

        return $value
    }

    return $null
}

$ErrorActionPreference = "Stop"

# Get paths
$Root         = Split-Path -Parent $PSScriptRoot
$RendererPath = Join-Path $Root "renderer"
$RegistryPath = Join-Path $Root "registry"
$BuildTemp    = Join-Path $Root "build-temp"
$PublicPath   = Join-Path $Root "public/previews"
$EnvPath      = Join-Path $Root ".env.local"

if (Test-Path $EnvPath) {
    $envContent = Get-Content $EnvPath
} else {
    $envContent = @()
}

# Safety check if the component or variant is not passed
if (-not $Component -or -not $Variant) {
    Write-Error "Both -Component and -Variant are required"
    exit 1
}

$SourceFile = Join-Path $RegistryPath "$Component/$Variant/${Component}_${Variant}.dart"

if (-not (Test-Path $SourceFile)) {
    Write-Error "Component source file not found: $SourceFile"
    exit 1
}

$RendererTarget = Join-Path $RendererPath "lib\component.dart"

Copy-Item $SourceFile $RendererTarget -Force

if ($PushToR2) {
    $OutputPath = Join-Path $BuildTemp "$Component/$Variant"
    
    # Get environment variables for R2
    if (Test-Path $EnvPath) {
        $R2AccountId = Get-EnvValue "R2_ACCOUNT_ID"
        $R2BucketName = Get-EnvValue "R2_BUCKET_NAME"
        $R2AccessKey = Get-EnvValue "R2_ACCESS_KEY_ID"
        $R2SecretKey = Get-EnvValue "R2_SECRET_ACCESS_KEY"
    } else {
        Write-Host "Warning: .env.local file NOT found! R2 upload may fail if variables are not in the environment."
    }
} else {
    $OutputPath = Join-Path $PublicPath "$Component/$Variant"
}

Push-Location $RendererPath

# Build the component
try {
    Write-Host "Building Flutter web component for $Component ($Variant)..."
    flutter build web --release --output $OutputPath --base-href "/previews/$Component/$Variant/"
}
finally {
    Pop-Location
}

if ($PushToR2) {
    Write-Host "Uploading the built component to R2..."
    
    if ($R2AccessKey) { $env:AWS_ACCESS_KEY_ID = $R2AccessKey }
    if ($R2SecretKey) { $env:AWS_SECRET_ACCESS_KEY = $R2SecretKey }
    
    $BucketPath = "s3://$R2BucketName/previews/$Component/$Variant"
    
    # If variables are not loaded from .env.local, AWS CLI will attempt to use default environment variables (e.g. from GitHub Actions)
    if ($R2AccountId) {
        $EndpointUrl = "https://$R2AccountId.r2.cloudflarestorage.com"
        aws s3 sync $OutputPath $BucketPath --endpoint-url $EndpointUrl --no-progress
    } else {
        # Fallback if endpoint URL is constructed from existing env var
        $EnvAccountId = $env:R2_ACCOUNT_ID
        if ($EnvAccountId) {
            $EndpointUrl = "https://$EnvAccountId.r2.cloudflarestorage.com"
            aws s3 sync $OutputPath $BucketPath --endpoint-url $EndpointUrl --no-progress
        } else {
            Write-Error "Missing R2 Account ID. Cannot upload to R2."
            exit 1
        }
    }
    Write-Host "Successfully uploaded to R2!"
} else {
    Write-Host "Local build complete! Preview is available at: public/previews/$Component/$Variant/"
}