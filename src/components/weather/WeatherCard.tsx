import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cloud, Droplets, Wind, Eye, Gauge, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  icon: string;
}

interface WeatherCardProps {
  data: WeatherData;
  className?: string;
}

export const WeatherCard = ({ data, className }: WeatherCardProps) => {
  const getWeatherIcon = (iconName: string) => {
    const iconProps = { size: 64, className: "text-blue-600" };

    switch (iconName) {
      case "sun":
        return <Sun {...iconProps} className="text-amber-500" />;
      case "cloud-sun":
        return <Cloud {...iconProps} className="text-blue-400" />;
      case "cloud-rain":
        return <Cloud {...iconProps} className="text-blue-600" />;
      default:
        return <Cloud {...iconProps} />;
    }
  };

  return (
    <Card
      className={cn(
        "bg-white/90 backdrop-blur-sm border-0 shadow-2xl",
        className
      )}
    >
      <CardContent className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Weather Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {data.location}
              </h2>
              <div className="flex items-center space-x-4">
                {getWeatherIcon(data.icon)}
                <div>
                  <div className="text-5xl font-bold text-gray-800">
                    {data.temperature}°C
                  </div>
                  <div className="text-xl text-gray-600">{data.condition}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Weather Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Droplets className="text-blue-500" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Humidity</div>
                  <div className="font-semibold text-gray-800">
                    {data.humidity}%
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Wind className="text-blue-500" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Wind Speed</div>
                  <div className="font-semibold text-gray-800">
                    {data.windSpeed} km/h
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Gauge className="text-blue-500" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Pressure</div>
                  <div className="font-semibold text-gray-800">
                    {data.pressure} hPa
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Eye className="text-blue-500" size={20} />
                <div>
                  <div className="text-sm text-gray-600">Visibility</div>
                  <div className="font-semibold text-gray-800">
                    {data.visibility} km
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">UV Index</span>
              <Badge
                variant={
                  data.uvIndex > 7
                    ? "destructive"
                    : data.uvIndex > 3
                    ? "default"
                    : "secondary"
                }
              >
                {data.uvIndex}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
