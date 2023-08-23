export interface DatetimeDto {
  timestamp: Date;
}

export interface TrafficDto {
  timestamp: DatetimeDto['timestamp'];
  image_path: string;
  image_url: string;
  location: string;
}

export interface Location {
  id: number;
  name: string;
  longitude: number;
  latitude: number
}

export interface WeatherDto {
  forecast: string;
  location: string;
  timestamp: DatetimeDto['timestamp'];
}
