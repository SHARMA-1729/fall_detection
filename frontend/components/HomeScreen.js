// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BLEListener from '../components/BLEListener';
import { getLocation } from '../components/LocationFetcher';
import { sendFallAlert } from '../components/AlertSender';
import MapViewComponent from '../components/MapViewComponent';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

  const handleFall = async () => {
    const loc = await getLocation();
    if (loc) {
      setLocation(loc);
      await sendFallAlert(loc);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Monitoring Fall...</Text>
      <BLEListener onFallDetected={handleFall} />
      <MapViewComponent location={location} />
    </View>
  );
};

export default HomeScreen;
