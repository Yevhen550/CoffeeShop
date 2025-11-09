import { StyleSheet, Text, View } from "react-native";
import { useLocation } from "../hooks/useLocation";
import { useSensors } from "../hooks/useSensors";

const LocationScreen = () => {
  const { city, country, latitude, longitude } = useLocation();
  const { accelerometerData, gyroscopeData, magnetometerData } = useSensors();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Info</Text>

      <Text>City: {city}</Text>

      <Text>Country: {country}</Text>

      <Text>Latitude: {latitude}</Text>

      <Text>Longitude: {longitude}</Text>

      <Text style={styles.title}>Sensor Info</Text>

      <Text>Accelerometer: {JSON.stringify(accelerometerData)}</Text>

      <Text>Gyroscope: {JSON.stringify(gyroscopeData)}</Text>

      <Text>Magnetometer: {JSON.stringify(magnetometerData)}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
