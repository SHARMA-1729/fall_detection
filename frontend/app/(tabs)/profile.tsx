import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HomeScreen } from "../../components/HomeScreen"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const userData = {
  full_name: 'Saurav Sharma',
  age: 76,
  gender: 'Male',
  medical_history: 'Diabetes, High Blood Pressure',
  medications: 'Metformin, Lisinopril',
  mobility_issues: 'Uses a walker, limited stair mobility',
  emergency_contacts: [
    {
      contact_name: 'Rita Sharma',
      relationship: 'Daughter',
      phone_number: '+91-9876543210',
      email: 'rita.sharma@example.com',
    },
    {
      contact_name: 'Dr. Verma',
      relationship: 'Family Doctor',
      phone_number: '+91-9123456789',
      email: 'dr.verma@clinic.com',
    },
  ],
};

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>User Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>👤 Name:</Text>
        <Text style={styles.value}>{userData.full_name}</Text>

        <Text style={styles.label}>🎂 Age:</Text>
        <Text style={styles.value}>{userData.age}</Text>

        <Text style={styles.label}>🚻 Gender:</Text>
        <Text style={styles.value}>{userData.gender}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>🩺 Medical History:</Text>
        <Text style={styles.value}>{userData.medical_history}</Text>

        <Text style={styles.label}>💊 Medications:</Text>
        <Text style={styles.value}>{userData.medications}</Text>

        <Text style={styles.label}>🦽 Mobility Issues:</Text>
        <Text style={styles.value}>{userData.mobility_issues}</Text>
      </View>

      <Text style={[styles.header, { fontSize: 20, marginBottom: 12 }]}>
        Emergency Contacts
      </Text>

      {userData.emergency_contacts.map((contact, index) => (
        <View style={styles.contactCard} key={index}>
          <Text style={styles.contactName}>
            <Ionicons name="person" size={18} /> {contact.contact_name}
          </Text>
          <Text style={styles.contactDetail}>
            Relationship: {contact.relationship}
          </Text>
          <Text style={styles.contactDetail}>
            📞 {contact.phone_number}
          </Text>
          <Text style={styles.contactDetail}>
            ✉️ {contact.email}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7b2cbf',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    color: '#5a189a',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
  value: {
    fontSize: 15,
    color: '#3c096c',
    marginLeft: 4,
  },
  contactCard: {
    backgroundColor: '#e0aaff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  contactName: {
    fontWeight: 'bold',
    color: '#3c096c',
    fontSize: 16,
  },
  contactDetail: {
    fontSize: 14,
    color: '#4c0070',
    marginTop: 2,
  },
});
//PROFILE