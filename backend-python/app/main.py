from fastapi import FastAPI
from app.routes import chat
from fastapi.middleware.cors import CORSMiddleware
from app.routes import resume

app = FastAPI(
    
    title="SkillBridge AI",
    version="1.0"
)

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(resume.router)
app.include_router(chat.router)

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillBridge AI 🚀"
    }