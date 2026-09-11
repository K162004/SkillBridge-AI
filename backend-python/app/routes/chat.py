from fastapi import APIRouter
from pydantic import BaseModel

from app.services.career_chat_service import generate_career_response


router = APIRouter()


class ChatRequest(BaseModel):

    message: str



@router.post("/chat")
def career_chat(request: ChatRequest):

    response = generate_career_response(
        request.message
    )


    return {
        "reply": response
    }