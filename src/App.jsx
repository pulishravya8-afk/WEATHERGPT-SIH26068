import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

import "./App.css";

/* =========================
   DEMO WEATHER DATA
========================= */

const weather = {
  city: "Hyderabad",
  temperature: 28,
  condition: "Partly Cloudy",
  feelsLike: 30,
  humidity: 62,
  wind: 14,
  rain: 18,
  uv: 5,
};

const forecast = [
  ["Today", "⛅", "Partly Cloudy", 28, 21, 18],
  ["Tomorrow", "🌤️", "Mostly Sunny", 30, 22, 12],
  ["Wed", "🌦️", "Light Rain", 27, 21, 48],
  ["Thu", "☀️", "Sunny", 31, 22, 8],
  ["Fri", "⛅", "Cloudy", 29, 21, 24],
];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <div className="logo">
      <span className="logo-icon">🌦️</span>

      <div>
        <strong>WeatherGPT</strong>
        <small>Weather Intelligence</small>
      </div>
    </div>
  );
}

/* =========================
   SIDEBAR
========================= */

function Sidebar() {
  const navigate = useNavigate();

  const links = [
    ["🏠", "Workspace", "/workspace"],
    ["◉", "Overview", "/overview"],
    ["☁️", "Forecast", "/forecast"],
    ["🗓️", "Day Planner", "/day-planner"],
    ["✦", "Smart Insights", "/smart-insights"],
    ["🤖", "AI Assistant", "/assistant"],
  ];

  return (
    <aside className="sidebar">

      <Logo />

      <p className="menu-title">MAIN MENU</p>

      <nav>
        {links.map(([icon, name, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>{icon}</span>
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">

        <button onClick={() => navigate("/settings")}>
          ⚙️ Settings
        </button>

        <button onClick={() => navigate("/login")}>
          ↪️ Logout
        </button>

      </div>

    </aside>
  );
}

/* =========================
   COMMON LAYOUT
========================= */

function Layout({ children }) {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main">
        {children}
      </main>

    </div>
  );
}

/* =========================
   LOGIN
========================= */

function Login() {

  const navigate = useNavigate();

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Logo />

        <p className="eyebrow">
          WELCOME TO WEATHERGPT
        </p>

        <h1>
          Plan smarter with weather intelligence.
        </h1>

        <p className="auth-text">
          Personalized forecasts, activity recommendations,
          risk insights and an AI weather assistant.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/workspace");
          }}
        >

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button className="primary-btn">
            Sign In
          </button>

        </form>

        <p className="switch-text">

          Don't have an account?

          <button onClick={() => navigate("/signup")}>
            Create account
          </button>

        </p>

      </div>

    </div>
  );
}

/* =========================
   SIGNUP
========================= */

function Signup() {

  const navigate = useNavigate();

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Logo />

        <p className="eyebrow">
          GET STARTED
        </p>

        <h1>
          Create your account.
        </h1>

        <p className="auth-text">
          Start making smarter decisions with WeatherGPT.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >

          <label>Name</label>

          <input
            placeholder="Your name"
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="you@example.com"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
            required
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            required
          />

          <button className="primary-btn">
            Create Account
          </button>

        </form>

        <p className="switch-text">

          Already have an account?

          <button onClick={() => navigate("/login")}>
            Sign in
          </button>

        </p>

      </div>

    </div>
  );
}

/* =========================
   WORKSPACE
========================= */

function Workspace() {

  const navigate = useNavigate();

  const [location, setLocation] =
    useState(weather.city);

  const [search, setSearch] =
    useState("");

  function detectLocation() {

    if (!navigator.geolocation) {

      alert(
        "Geolocation is not supported by your browser."
      );

      return;
    }

    navigator.geolocation.getCurrentPosition(

      () => {
        setLocation("Current Location");
      },

      () => {
        alert(
          "Unable to access your location."
        );
      }

    );
  }

  function searchLocation() {

    if (search.trim() !== "") {

      setLocation(search.trim());

      setSearch("");
    }
  }

  return (
    <Layout>

      <header className="page-header">

        <div>

          <p className="eyebrow">
            YOUR WEATHER WORKSPACE
          </p>

          <h1>
            Good morning
          </h1>

          <p>
            Your weather, simplified.
          </p>

        </div>

        <button
          className="location-btn"
          onClick={detectLocation}
        >
          📍 Use my location
        </button>

      </header>

      {/* SEARCH */}

      <div className="search-area">

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={(e) => {

            if (e.key === "Enter") {
              searchLocation();
            }

          }}
          placeholder="Search city or location..."
        />

        <button onClick={searchLocation}>
          Search
        </button>

      </div>

      <div className="location">

        📍 {location}

        <span>
          ● Live weather view
        </span>

      </div>

      {/* WEATHER */}

      <section className="hero-weather">

        <div>

          <p>Currently</p>

          <div className="temperature">
            {weather.temperature}°
          </div>

          <h2>
            {weather.condition}
          </h2>

          <p>
            Feels like {weather.feelsLike}°
          </p>

        </div>

        <div className="weather-icon">
          ⛅
        </div>

      </section>

      {/* CARDS */}

      <div className="dashboard-grid">

        <Card
          title="WEATHER RISK"
          value="32 / 100"
          text="Low weather-related risk under current conditions."
          action="View analysis →"
          onClick={() =>
            navigate("/overview")
          }
        />

        <Card
          title="TODAY'S RECOMMENDATION"
          heading="Outdoor activities look favorable."
          text="Comfortable conditions with a low chance of rain."
          action="Plan my day →"
          onClick={() =>
            navigate("/day-planner")
          }
        />

        <Card
          title="BEST ACTIVITY"
          heading="🚶 Walking"
          text="Best during morning hours."
          action="Explore activities →"
          onClick={() =>
            navigate("/day-planner")
          }
        />

      </div>

      {/* QUICK ACTIONS */}

      <section className="section">

        <p className="eyebrow">
          QUICK ACTIONS
        </p>

        <h2>
          What would you like to do?
        </h2>

        <div className="quick-grid">

          <QuickAction
            icon="☁️"
            title="View Forecast"
            text="See upcoming weather"
            onClick={() =>
              navigate("/forecast")
            }
          />

          <QuickAction
            icon="🗓️"
            title="Plan My Day"
            text="Find suitable activities"
            onClick={() =>
              navigate("/day-planner")
            }
          />

          <QuickAction
            icon="✦"
            title="Smart Insights"
            text="Understand the weather"
            onClick={() =>
              navigate("/smart-insights")
            }
          />

          <QuickAction
            icon="🤖"
            title="Ask WeatherGPT"
            text="Talk to your assistant"
            onClick={() =>
              navigate("/assistant")
            }
          />

        </div>

      </section>

    </Layout>
  );
}

/* =========================
   CARD
========================= */

function Card({
  title,
  value,
  heading,
  text,
  action,
  onClick,
}) {

  return (
    <div className="card">

      <p className="card-label">
        {title}
      </p>

      {value && (
        <div className="risk-value">
          {value}
        </div>
      )}

      {heading && (
        <h3>
          {heading}
        </h3>
      )}

      <p>
        {text}
      </p>

      <button onClick={onClick}>
        {action}
      </button>

    </div>
  );
}

/* =========================
   QUICK ACTION
========================= */

function QuickAction({
  icon,
  title,
  text,
  onClick,
}) {

  return (
    <button
      className="quick-card"
      onClick={onClick}
    >

      <span>{icon}</span>

      <strong>
        {title}
      </strong>

      <small>
        {text}
      </small>

    </button>
  );
}

/* =========================
   OVERVIEW
========================= */

function Overview() {

  return (
    <Layout>

      <PageTitle
        eyebrow="WEATHER ANALYSIS"
        title="Weather Overview"
        subtitle="Understand today's conditions at a glance."
      />

      <div className="overview-weather">

        <div className="big-weather">

          <span>⛅</span>

          <div>

            <strong>
              {weather.temperature}°C
            </strong>

            <p>
              {weather.condition}
            </p>

          </div>

        </div>

        <div>

          <p>
            Feels like
          </p>

          <strong>
            {weather.feelsLike}°C
          </strong>

        </div>

      </div>

      <div className="details-grid">

        <Detail
          icon="💧"
          title="Humidity"
          value={`${weather.humidity}%`}
        />

        <Detail
          icon="💨"
          title="Wind Speed"
          value={`${weather.wind} km/h`}
        />

        <Detail
          icon="🌧️"
          title="Rain Probability"
          value={`${weather.rain}%`}
        />

        <Detail
          icon="☀️"
          title="UV Index"
          value={weather.uv}
        />

      </div>

      <div className="analysis-grid">

        <div className="card">

          <p className="card-label">
            WEATHER RISK
          </p>

          <div className="large-risk">
            32
            <span>/100</span>
          </div>

          <span className="low-badge">
            LOW RISK
          </span>

          <p>
            Current conditions indicate relatively low
            weather-related risk.
          </p>

        </div>

        <div className="card">

          <p className="card-label">
            WHY?
          </p>

          <h3>
            Factors affecting today's risk
          </h3>

          <ul className="check-list">

            <li>
              ✓ Low rainfall probability
            </li>

            <li>
              ✓ Moderate wind
            </li>

            <li>
              ✓ Comfortable temperature
            </li>

            <li>
              ✓ No major weather alert
            </li>

          </ul>

        </div>

      </div>

      <div className="alert-card">

        <span>✓</span>

        <div>

          <strong>
            No major weather alerts
          </strong>

          <p>
            Conditions are currently stable.
          </p>

        </div>

      </div>

    </Layout>
  );
}

/* =========================
   DETAIL
========================= */

function Detail({
  icon,
  title,
  value,
}) {

  return (
    <div className="detail-card">

      <span>
        {icon}
      </span>

      <p>
        {title}
      </p>

      <strong>
        {value}
      </strong>

    </div>
  );
}

/* =========================
   FORECAST
========================= */

function Forecast() {

  return (
    <Layout>

      <PageTitle
        eyebrow="UPCOMING WEATHER"
        title="Weather Forecast"
        subtitle="Plan ahead with a clear view of upcoming weather."
      />

      <div className="forecast-grid">

        {forecast.map((day) => (

          <div
            className="forecast-card"
            key={day[0]}
          >

            <strong>
              {day[0]}
            </strong>

            <span className="forecast-icon">
              {day[1]}
            </span>

            <p>
              {day[2]}
            </p>

            <div className="temps">

              <strong>
                {day[3]}°
              </strong>

              <span>
                {day[4]}°
              </span>

            </div>

            <small>
              🌧️ {day[5]}% rain
            </small>

          </div>

        ))}

      </div>

      <section className="section">

        <p className="eyebrow">
          TODAY
        </p>

        <h2>
          Hourly Outlook
        </h2>

        <div className="hourly">

          {[
            "9 AM",
            "11 AM",
            "1 PM",
            "3 PM",
            "5 PM",
            "7 PM",
          ].map((time, index) => (

            <div key={time}>

              <strong>
                {time}
              </strong>

              <span>
                {
                  [
                    "🌤️",
                    "☀️",
                    "☀️",
                    "⛅",
                    "🌥️",
                    "🌙",
                  ][index]
                }
              </span>

              <b>
                {
                  [24, 27, 29, 30, 28, 25][index]
                }°
              </b>

            </div>

          ))}

        </div>

      </section>

    </Layout>
  );
}

/* =========================
   DAY PLANNER
========================= */

function DayPlanner() {

  const [selected, setSelected] =
    useState("Outdoor");

  const activities = {

    Outdoor: [
      ["🚶", "Walking", "Recommended", "Comfortable conditions."],
      ["🚴", "Cycling", "Recommended", "Low chance of rain."],
      ["🏃", "Running", "Recommended", "Best in the morning."],
      ["🧺", "Picnic", "Recommended", "Weather is favorable."],
    ],

    Travel: [
      ["🚗", "Road Trip", "Recommended", "Generally suitable conditions."],
      ["📸", "Sightseeing", "Recommended", "Good visibility expected."],
      ["🚌", "Local Travel", "Recommended", "No major alerts."],
    ],

    Indoor: [
      ["📚", "Reading", "Excellent", "Comfortable indoor option."],
      ["🎬", "Movies", "Excellent", "Perfect indoor activity."],
      ["🏛️", "Museum", "Good", "Good alternative if weather changes."],
    ],

  };

  return (
    <Layout>

      <PageTitle
        eyebrow="PERSONALIZED PLANNING"
        title="Smart Day Planner"
        subtitle="Plan your activities around the weather."
      />

      <div className="tabs">

        {Object.keys(activities).map(
          (tab) => (

            <button
              className={
                selected === tab
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelected(tab)
              }
              key={tab}
            >
              {tab}
            </button>

          )
        )}

      </div>

      <div className="activity-grid">

        {activities[selected].map(
          ([icon, name, status, reason]) => (

            <div
              className="activity-card"
              key={name}
            >

              <span>
                {icon}
              </span>

              <div>

                <h3>
                  {name}
                </h3>

                <b>
                  {status}
                </b>

                <p>
                  {reason}
                </p>

              </div>

            </div>

          )
        )}

      </div>

      <div className="best-time">

        <p className="eyebrow">
          BEST TIME TODAY
        </p>

        <h2>
          9:00 AM – 11:00 AM
        </h2>

        <p>
          Morning conditions are expected to be the
          most comfortable for outdoor activities.
        </p>

      </div>

    </Layout>
  );
}

/* =========================
   SMART INSIGHTS
========================= */

function SmartInsights() {

  return (
    <Layout>

      <PageTitle
        eyebrow="WEATHERGPT AI"
        title="Smart Weather Insights"
        subtitle="AI-powered explanations that help you make better decisions."
      />

      <div className="insight-main">

        <div className="ai-symbol">
          ✦
        </div>

        <p className="card-label">
          TODAY'S AI INSIGHT
        </p>

        <h2>
          Weather conditions are favorable for outdoor
          activities today.
        </h2>

        <p>
          Rain probability is low and temperatures remain
          comfortable. UV exposure is moderate, so plan
          outdoor activities accordingly.
        </p>

      </div>

      <div className="insight-grid">

        <div className="card">

          <p className="card-label">
            BEST ACTIVITY
          </p>

          <h2>
            🚶 Walking
          </h2>

          <p>
            Morning hours are recommended.
          </p>

        </div>

        <div className="card">

          <p className="card-label">
            MAIN CAUTION
          </p>

          <h2>
            ☀️ UV Exposure
          </h2>

          <p>
            Consider sunscreen during midday.
          </p>

        </div>

        <div className="card">

          <p className="card-label">
            TRAVEL INSIGHT
          </p>

          <h2>
            🚗 Suitable
          </h2>

          <p>
            Conditions are generally favorable for travel.
          </p>

        </div>

      </div>

      <div className="card why-card">

        <p className="card-label">
          WHY WEATHERGPT RECOMMENDS THIS
        </p>

        <div className="check-columns">

          <span>
            ✓ Comfortable temperature
          </span>

          <span>
            ✓ Low rainfall probability
          </span>

          <span>
            ✓ Moderate wind
          </span>

          <span>
            ✓ No major alerts
          </span>

        </div>

      </div>

    </Layout>
  );
}

/* =========================
   AI ASSISTANT
========================= */

function Assistant() {

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        text:
          "Hi! I'm WeatherGPT. Ask me about today's weather, activities, travel or forecasts.",
      },
    ]);

  const [input, setInput] =
    useState("");

  function sendMessage() {

    if (!input.trim()) return;

    const userMessage = input;

    setMessages((old) => [

      ...old,

      {
        sender: "user",
        text: userMessage,
      },

      {
        sender: "ai",
        text:
          "I'm currently using demo data. Once the backend is connected, I'll provide real-time weather intelligence for your question.",
      },

    ]);

    setInput("");
  }

  return (
    <Layout>

      <PageTitle
        eyebrow="WEATHERGPT AI"
        title="AI Assistant"
        subtitle="Ask anything about weather, activities and forecasts."
      />

      <div className="chat-container">

        <div className="chat-messages">

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "message user-message"
                    : "message ai-message"
                }
              >

                <span>
                  {
                    message.sender === "user"
                      ? "You"
                      : "🌦️ WeatherGPT"
                  }
                </span>

                <p>
                  {message.text}
                </p>

              </div>

            )
          )}

        </div>

        <div className="suggestions">

          {[
            "What's the weather today?",
            "Can I go running?",
            "Will it rain tomorrow?",
          ].map((question) => (

            <button
              key={question}
              onClick={() =>
                setInput(question)
              }
            >
              {question}
            </button>

          ))}

        </div>

        <div className="chat-input">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {
                sendMessage();
              }

            }}
            placeholder="Ask WeatherGPT..."
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </Layout>
  );
}

/* =========================
   SETTINGS
========================= */

function Settings() {

  const [notifications, setNotifications] =
    useState(true);

  const [temperature, setTemperature] =
    useState("Celsius");

  return (
    <Layout>

      <PageTitle
        eyebrow="PREFERENCES"
        title="Settings"
        subtitle="Customize your WeatherGPT experience."
      />

      <div className="settings-grid">

        {/* PROFILE */}

        <div className="card">

          <p className="card-label">
            PROFILE
          </p>

          <h3>
            Account Information
          </h3>

          <label className="setting-label">
            Name
          </label>

          <input
            className="setting-input"
            value="WeatherGPT User"
            readOnly
          />

          <label className="setting-label">
            Email
          </label>

          <input
            className="setting-input"
            value="user@weathergpt.com"
            readOnly
          />

        </div>

        {/* TEMPERATURE */}

        <div className="card">

          <p className="card-label">
            WEATHER PREFERENCES
          </p>

          <h3>
            Temperature Unit
          </h3>

          <div className="setting-options">

            <button
              className={
                temperature === "Celsius"
                  ? "option-active"
                  : ""
              }
              onClick={() =>
                setTemperature("Celsius")
              }
            >
              °C Celsius
            </button>

            <button
              className={
                temperature === "Fahrenheit"
                  ? "option-active"
                  : ""
              }
              onClick={() =>
                setTemperature("Fahrenheit")
              }
            >
              °F Fahrenheit
            </button>

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="card">

          <p className="card-label">
            NOTIFICATIONS
          </p>

          <h3>
            Weather Alerts
          </h3>

          <div className="toggle-row">

            <div>

              <strong>
                Weather notifications
              </strong>

              <p>
                Receive important weather alerts.
              </p>

            </div>

            <button
              className={
                notifications
                  ? "toggle on"
                  : "toggle"
              }
              onClick={() =>
                setNotifications(!notifications)
              }
            >
              {notifications
                ? "ON"
                : "OFF"}
            </button>

          </div>

        </div>

        {/* ABOUT */}

        <div className="card">

          <p className="card-label">
            ABOUT WEATHERGPT
          </p>

          <h3>
            AI-Powered Weather Intelligence
          </h3>

          <p>
            WeatherGPT combines weather forecasting,
            recommendations, risk analysis and AI
            assistance to help users make smarter
            decisions.
          </p>

        </div>

      </div>

    </Layout>
  );
}

/* =========================
   PAGE TITLE
========================= */

function PageTitle({
  eyebrow,
  title,
  subtitle,
}) {

  return (
    <header className="page-header simple">

      <div>

        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

        <p>
          {subtitle}
        </p>

      </div>

    </header>
  );
}

/* =========================
   APP ROUTES
========================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/workspace"
          element={<Workspace />}
        />

        <Route
          path="/overview"
          element={<Overview />}
        />

        <Route
          path="/forecast"
          element={<Forecast />}
        />

        <Route
          path="/day-planner"
          element={<DayPlanner />}
        />

        <Route
          path="/smart-insights"
          element={<SmartInsights />}
        />

        <Route
          path="/assistant"
          element={<Assistant />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="*"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;