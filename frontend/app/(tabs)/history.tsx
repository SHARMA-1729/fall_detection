import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const fallEvents = [
  {
    _id: '1',
    timestamp: new Date(),
    location: 'Living Room',
    impact_severity: 'Hard',
    activity_before_fall: 'Walking',
    user_response: 'Unconscious',
    fall_confirmed: true,
    sensor_data: {
      accelerometer: { x: 1.2, y: 0.8, z: 9.8 },
      gyroscope: { x: 0.1, y: 0.2, z: 0.3 },
      barometer: 1012,
      heart_rate: 110,
      spo2: 93,
    },
  },
  {
    _id: '2',
    timestamp: new Date(),
    location: 'Kitchen',
    impact_severity: 'Moderate',
    activity_before_fall: 'Standing',
    user_response: 'Conscious',
    fall_confirmed: true,
    sensor_data: {
      accelerometer: { x: 0.9, y: 0.5, z: 9.2 },
      gyroscope: { x: 0.1, y: 0.1, z: 0.2 },
      barometer: 1010,
      heart_rate: 98,
      spo2: 97,
    },
  },
];

const HistoryScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="location" size={18} color="#7b2cbf" />
        <Text style={styles.location}>{item.location}</Text>
      </View>

      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleString()}
      </Text>

      <Text style={styles.detail}>Impact Severity: {item.impact_severity}</Text>
      <Text style={styles.detail}>Activity Before Fall: {item.activity_before_fall}</Text>
      <Text style={styles.detail}>User Response: {item.user_response}</Text>

      <View style={styles.sensors}>
        <Text style={styles.sensorText}>❤️ Heart Rate: {item.sensor_data.heart_rate} bpm</Text>
        <Text style={styles.sensorText}>🫁 SpO₂: {item.sensor_data.spo2}%</Text>
        <Text style={styles.sensorText}>⛰️ Pressure: {item.sensor_data.barometer} hPa</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={fallEvents}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.container}
    />
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff', // ✅ Pure white background
  },
  card: {
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#7b2cbf',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  location: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#5a189a',
  },
  timestamp: {
    fontSize: 13,
    color: '#7b2cbf',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: '#3c096c',
    marginBottom: 2,
  },
  sensors: {
    marginTop: 8,
  },
  sensorText: {
    fontSize: 13,
    color: '#240046',
    marginBottom: 1,
  },
});
//HISTORY