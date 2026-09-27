Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "       Stopping SkillBridge AI" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Stop Java Spring Boot
Get-Process java -ErrorAction SilentlyContinue | Stop-Process -Force

# Stop Python / FastAPI
Get-Process python -ErrorAction SilentlyContinue | Stop-Process -Force

# Stop Node / React Vite
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "All SkillBridge services have been stopped." -ForegroundColor Green
Write-Host ""