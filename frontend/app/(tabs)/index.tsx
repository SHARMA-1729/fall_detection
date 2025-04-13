import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { HomeScreen } from ""
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const currentDevice = 'Band 002 - Grandpa’s Tracker';
const isFallDetected = false;

const sensorData = {
  heartRate: 92,
  spo2: 97,
  location: 'Living Room',
  lastFall: '2025-04-06 09:23 AM',
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fall Detection Dashboard</Text>``

      <View
        style={[
          styles.statusBox,
          { backgroundColor: isFallDetected ? '#ffccd5' : '#d8f3dc' },
        ]}
      >
        <Ionicons
          name={isFallDetected ? 'alert-circle' : 'checkmark-circle'}
          size={32}
          color={isFallDetected ? '#d00000' : '#2d6a4f'}
        />
        <Text style={styles.statusText}>
          {isFallDetected ? 'Fall Detected!' : 'No Fall Detected'}
        </Text>
      </View>

      <View style={styles.deviceBox}>
        <MaterialCommunityIcons name="watch-variant" size={24} color="#7b2cbf" />
        <Text style={styles.deviceText}>Tracking: {currentDevice}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Vitals & Info</Text>
        <Text style={styles.infoText}>❤️ Heart Rate: {sensorData.heartRate} bpm</Text>
        <Text style={styles.infoText}>🫁 SpO₂: {sensorData.spo2}%</Text>
        <Text style={styles.infoText}>📍 Location: {sensorData.location}</Text>
        <Text style={styles.infoText}>🕒 Last Fall: {sensorData.lastFall}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5a189a',
    marginBottom: 20,
    textAlign: 'center',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
  },
  statusText: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0aaff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  deviceText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#3c096c',
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#f3e8ff',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7b2cbf',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: '#3c096c',
    marginBottom: 6,
  },
});
//INDEX TSX