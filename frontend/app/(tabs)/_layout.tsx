import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          switch (route.name) {
            case 'home': iconName = 'home'; break;
            case 'history': iconName = 'time'; break;
            case 'device': iconName = 'bluetooth'; break;
            case 'profile': iconName = 'person'; break;
            default: iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    />
  );
}
//LAYOUT TABS