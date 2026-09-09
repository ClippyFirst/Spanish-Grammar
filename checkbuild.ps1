$ErrorActionPreference = 'Continue'
$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location 'f:\GitHub\Grammars\Spanish Grammar'
$env:PUBLIC_BASE = '/spanish-grammar'
$env:SITE_URL = 'https://clippyfirst.github.io/spanish-grammar'
$timer = [System.Diagnostics.Stopwatch]::StartNew()
npm run build > 'build_run.log' 2>&1
$code = $LASTEXITCODE
$timer.Stop()
Write-Output "EXIT_CODE=$code TIME=${timer.Elapsed.TotalSeconds}s"
