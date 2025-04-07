import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ThemedView } from '../../components/ThemedView';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const availableDevices = [
  { id: '001', name: 'Band 001 – Papa’s Tracker' },
  { id: '002', name: 'Band 002 – Dadi’s Tracker' },
];

export default function DeviceScreen() {
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null);

  const handleConnect = (deviceName: string) => {
    setConnectedDevice(deviceName);
    Alert.alert('Device Connected', `Successfully connected to ${deviceName}`);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Connect Device</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🔗 Connected Device:</Text>
        {connectedDevice ? (
          <View style={styles.connectedBox}>
            <MaterialIcons name="watch" size={24} color="#5a189a" />
            <Text style={styles.connectedText}>{connectedDevice}</Text>
          </View>
        ) : (
          <Text style={styles.noDeviceText}>No device connected</Text>
        )}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>📡 Available Devices</Text>

      <FlatList
        data={availableDevices}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deviceCard}
            onPress={() => handleConnect(item.name)}
          >
            <Text style={styles.deviceName}>{item.name}</Text>
            <MaterialCommunityIcons name="bluetooth-connect" size={22} color="#7b2cbf" />
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // 👈 white background
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7b2cbf',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f3e8ff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5a189a',
    marginBottom: 10,
  },
  connectedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0aaff',
    padding: 10,
    borderRadius: 10,
  },
  connectedText: {
    marginLeft: 10,
    color: '#3c096c',
    fontSize: 16,
    fontWeight: '500',
  },
  noDeviceText: {
    color: '#9e579d',
    fontStyle: 'italic',
  },
  deviceCard: {
    backgroundColor: '#f3e8ff',
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceName: {
    fontSize: 16,
    color: '#4c0070',
  },
});
//DEVICE