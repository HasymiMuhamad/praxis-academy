Read-Host "Kamu mau cari file .java di drive mana?";

$drive_name = Read-Host
Get-Childitem –Path {$drive_name}:\ -Include *.java* -File -Recurse -ErrorAction SilentlyContinue

