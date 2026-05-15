# Get Component and Variant name
param(
    [string]$Component = "",
    [string]$Variant = ""
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
$EnvPath      = Join-Path $Root ".env.local"

$envContent = Get-Content $EnvPath

# Safety check if the component or variant is not passed
if (-not $Component -or -not $Variant) {
    Write-Error "Both -Component and -Variant are required"
    exit 1
}

$SourceFile = Join-Path $RegistryPath "$Component\$Variant\${Component}_${Variant}.dart"

if (-not (Test-Path $SourceFile)) {
    Write-Error "Component source file not found: $SourceFile"
    exit 1
}

$RendererTarget = Join-Path $RendererPath "lib\component.dart"

Copy-Item $SourceFile $RendererTarget -Force

$OutputPath = Join-Path $BuildTemp "$Component\$Variant"

# Get environment variables
if (Test-Path $EnvPath) {
    $R2AccountId = Get-EnvValue "R2_ACCOUNT_ID"
    $R2BucketName = Get-EnvValue "R2_BUCKET_NAME"
    $R2AccessKey = Get-EnvValue "R2_ACCESS_KEY_ID"
    $R2SecretKey = Get-EnvValue "R2_SECRET_ACCESS_KEY"
} else {
    Write-Host ".env.local file NOT found!"
}

Push-Location $RendererPath

# Build the component
try {
    flutter build web --release --output $OutputPath --base-href "/previews/$Component/$Variant/"
}
finally {
    Pop-Location
}

# Upload the built component to R2
$env:AWS_ACCESS_KEY_ID = $R2AccessKey
$env:AWS_SECRET_ACCESS_KEY = $R2SecretKey

$BucketPath = "s3://$R2BucketName/previews/$Component/$Variant"

aws s3 sync $OutputPath $BucketPath `
    --endpoint-url "https://$R2AccountId.r2.cloudflarestorage.com" `
    --no-progress