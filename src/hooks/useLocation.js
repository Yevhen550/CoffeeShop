import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useLocation = () => {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      if (latitude && longitude) {
        setLatitude(latitude);
        setLongitude(longitude);
      }

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (reverseGeocode.length > 0) {
        const { city, country } = reverseGeocode[0];
        setCity(city || null);
        setCountry(country || null);
      }
    } catch (error) {
      Alert.alert("Error getting location", JSON.stringify(error));
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { city, country, latitude, longitude };
};
