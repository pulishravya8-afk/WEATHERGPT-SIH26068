def get_chat_response(message: str) -> str:
    """
    Generates a basic response for WeatherGPT.
    This will later be connected to weather APIs,
    the ML risk model, and the recommendation engine.
    """

    message = message.lower().strip()

    if message in ["hi", "hello", "hey"]:
        return (
            "Hello! I am WeatherGPT 🌦️. "
            "Ask me about weather, travel, outdoor activities, or weather risks."
        )

    elif "weather" in message:
        return (
            "I can help you check weather information. "
            "Please tell me the city or location you want to know about."
        )

    elif "rain" in message:
        return (
            "I can help you analyze rainfall conditions. "
            "Please tell me the location and date."
        )

    elif "travel" in message or "journey" in message:
        return (
            "I can analyze weather conditions for your journey "
            "and help identify possible weather-related risks."
        )

    elif "activity" in message or "cycling" in message or "walking" in message:
        return (
            "WeatherGPT can evaluate whether an outdoor activity is suitable "
            "based on weather conditions and risk levels."
        )

    elif "risk" in message:
        return (
            "Our system calculates an Activity Risk Score from 0 to 100. "
            "A higher score means higher weather-related risk."
        )

    else:
        return (
            "I am WeatherGPT 🌦️. I can help with weather forecasts, "
            "travel planning, outdoor activities, and weather risk analysis."
        )