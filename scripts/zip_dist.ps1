# Zip the Vite `dist/` folder into dist.zip
# Run this after `npm run build` inside `cognitiva_tcc`
param(
    [string]$SourcePath = "./cognitiva_tcc/dist",
    [string]$OutZip = "./dist.zip"
)

if (-Not (Test-Path $SourcePath)) {
    Write-Error "Source path $SourcePath not found. Run 'npm run build' first."
    exit 1
}

if (Test-Path $OutZip) { Remove-Item $OutZip }

Compress-Archive -Path (Join-Path $SourcePath '*') -DestinationPath $OutZip -Force
Write-Host "Created $OutZip"
