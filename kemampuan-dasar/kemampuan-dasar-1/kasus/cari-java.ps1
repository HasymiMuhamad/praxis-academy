Write-Host "Sedang mencari file .java, wait ya...";

Get-Childitem –Path C:\ -Include *.java* -File -Recurse -ErrorAction SilentlyContinue

Get-Childitem –Path D:\ -Include *.java* -File -Recurse -ErrorAction SilentlyContinue

Get-Childitem –Path E:\ -Include *.java* -File -Recurse -ErrorAction SilentlyContinue