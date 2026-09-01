# WeatherGPT-SIH26068

## AI-Powered Conversational Weather Intelligence and Decision Support System

WeatherGPT is an intelligent weather assistant designed to provide more than traditional weather forecasts. The system combines real-time weather information, AI-based risk analysis, activity recommendations, and conversational interaction to help users understand how weather conditions may affect their daily plans and journeys.

## Problem Statement

Traditional weather applications mainly display temperature, rainfall, humidity, and forecasts. However, users often need answers to practical questions such as:

- Is it safe to travel today?
- Should I go for a bike ride?
- Is outdoor activity risky?
- Which route has better weather conditions?
- How will weather affect my journey?
- What happens if weather conditions worsen?

WeatherGPT aims to transform raw weather data into intelligent, understandable, and actionable recommendations.

## Core Features

### 1. Conversational Weather Assistant
Users can ask weather-related questions in natural language.

Examples:

- What is the weather in Hyderabad today?
- Is it safe to travel tomorrow?
- Can I go cycling this evening?
- Will it rain during my journey?

### 2. Real-Time and Multi-Day Weather Forecast

- Current weather conditions
- Hourly forecast
- Multi-day forecast
- Temperature
- Rainfall
- Humidity
- Wind speed
- Weather alerts

### 3. ML-Based Activity Risk Score

The system calculates a weather risk score from 0 to 100 based on multiple weather conditions.

Example:

- 0–30 → Low Risk
- 31–60 → Moderate Risk
- 61–80 → High Risk
- 81–100 → Severe Risk

### 4. Impact-Based Recommendations

Instead of only displaying weather values, WeatherGPT provides actionable recommendations.

Examples:

- Avoid outdoor activities due to heavy rainfall.
- Good conditions for cycling.
- Carry an umbrella during your journey.
- Delay travel because of severe weather risk.

### 5. Explainable AI

The system explains why a particular risk score or recommendation was generated.

Example:

"Risk is high because heavy rainfall, strong wind, and low visibility are expected."

### 6. Weather Risk Map

A visual map displays weather risk levels across different locations.

### 7. Journey Weather Intelligence

Users can analyze weather conditions along a journey.

The system can provide:

- Weather conditions along the route
- Risk during different journey stages
- Recommended travel time
- Weather-related travel warnings

### 8. Scenario Simulator

Users can explore possible weather scenarios.

Example:

- What if rainfall increases?
- What happens if wind speed becomes stronger?
- How would the activity risk change?

## Advanced Features

- Hyperlocal community weather reports
- Multilingual support including Telugu
- Voice interaction
- Smart weather notifications
- Climate and historical weather analysis

## Technology Stack

### Frontend

- React
- HTML
- CSS
- JavaScript

### Backend

- Python
- FastAPI

### Machine Learning

- Python
- Scikit-learn
- Pandas
- NumPy

### Database

- MongoDB

### APIs and Services

- Weather API
- Geolocation API
- Maps API

## Project Structure

```text
WeatherGPT-SIH26068/

├── frontend/       # User interface
├── backend/        # APIs and backend services
├── ml-model/       # ML risk prediction model
├── database/       # Database schemas and collections
├── docs/           # Documentation
└── README.md       # Project overview