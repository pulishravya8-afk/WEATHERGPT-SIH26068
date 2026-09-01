from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import get_chat_response


router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    """
    Receives a user message and returns a WeatherGPT response.
    """

    bot_response = get_chat_response(request.message)

    return ChatResponse(response=bot_response)