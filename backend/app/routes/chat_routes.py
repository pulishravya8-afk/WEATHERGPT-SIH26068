from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

from app.services.chat_service import get_chat_response
from app.database import chat_collection


router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    """
    Receives a user message, generates a WeatherGPT response,
    and saves the conversation in MongoDB.
    """

    bot_response = get_chat_response(request.message)

    chat_data = {
        "user_message": request.message,
        "bot_response": bot_response,
        "timestamp": datetime.now()
    }

    chat_collection.insert_one(chat_data)

    return ChatResponse(response=bot_response)