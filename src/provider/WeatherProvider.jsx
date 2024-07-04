import { WeatherContext } from "../context";

const WeatherProvider = ({ children }) => {
  return <WeatherContext>{children}</WeatherContext>;
};

export default WeatherProvider;
