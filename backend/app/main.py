from fastapi import FastAPI

from app.routes.chat_routes import router as chat_router

app = FastAPI(
    title="WeatherGPT API",
    description="AI-Powered Conversational Weather Intelligence System"
)

app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to WeatherGPT API"
    }