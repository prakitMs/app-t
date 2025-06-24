"use client";

import { useEffect, useState } from "react";
import { WeatherCard, WeatherChart } from "@/components/weather";
const mockWeatherData = {
  location: "Thailand",
  temperature: 34,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  pressure: 1013,
  visibility: 10,
  uvIndex: 10,
  icon: "sun",
};

const hourlyData = [
  { time: "6 AM", temp: 18, precipitation: 0 },
  { time: "9 AM", temp: 20, precipitation: 0 },
  { time: "12 PM", temp: 22, precipitation: 10 },
  { time: "3 PM", temp: 24, precipitation: 20 },
  { time: "6 PM", temp: 21, precipitation: 5 },
  { time: "9 PM", temp: 19, precipitation: 0 },
];

export default function Weather() {
  const [weatherData, setWeatherData] = useState(mockWeatherData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="grid grid-cols-7 ">
        <div className="bg-white bg-clip-text text-transparent text-[30px] font-bold p-2 col-span-3 col-start-4">
          Weather Dashboard
        </div>

        <a href="/" className="col-start-8 p-2 text-white hover:underline">
          Home Page
        </a>
      </div>

      <div className="p-3">
        {weatherData && (
          <WeatherCard
            data={weatherData}
            className="animate-fade-in shadow-lg rounded-2xl "
          />
        )}

        <div className="pt-2">
          <WeatherChart
            data={hourlyData}
            title="24-Hour Forecast"
            className="animate-fade-in shadow-lg rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}
