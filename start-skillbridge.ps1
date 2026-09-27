$root = "C:\SkillBridgeAI"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "       Starting SkillBridge AI" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start Java Spring Boot Backend
Start-Process powershell -ArgumentList `
    "-NoExit", `
    "-Command", `
    "Set-Location '$root\backend-java\backend-java'; .\mvnw.cmd spring-boot:run"

# Start Python FastAPI Backend
Start-Process powershell -ArgumentList `
    "-NoExit", `
    "-Command", `
    "Set-Location '$root\backend-python'; & '$root\.venv\Scripts\python.exe' -m uvicorn app.main:app --reload"

# Start React Frontend
Start-Process powershell -ArgumentList `
    "-NoExit", `
    "-Command", `
    "Set-Location '$root\frontend'; npm run dev"

Write-Host "All SkillBridge services are starting..." -ForegroundColor Green
Write-Host ""
Write-Host "Java Backend : http://localhost:8080" -ForegroundColor Yellow
Write-Host "Python API   : http://localhost:8000" -ForegroundColor Yellow
Write-Host "Frontend     : http://localhost:5173" -ForegroundColor Yellow
Write-Host ""
Write-Host "You can now open the frontend in your browser." -ForegroundColor Green