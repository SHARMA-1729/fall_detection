// components/LocationFetcher.js
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform, Alert } from 'react-native';

export const getLocation = async () => {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) return null;

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      (error) => {
        Alert.alert("Location Error", error.message);
        reject(null);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
    );
  });
};

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};
