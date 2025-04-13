// components/MapViewComponent.js
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

const MapViewComponent = ({ location }) => {
  if (!location) return null;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}>
        <Marker coordinate={location} title="Fall Detected Here" />
      </MapView>
    </View>
  );
};

export default MapViewComponent;
