import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, List, PlusCircle, PieChart, Settings } from 'lucide-react-native';

// Import your screen components (Create these files in /screens)
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import AddExpense from '../screens/AddExpense';
import Analytics from '../screens/Analytics';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    // In TabNavigator.js
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#2563eb',
      headerStyle: { backgroundColor: '#f8fafc' },
      headerShown: true, // Add this line explicitly as a boolean
    }}>
      <Tab.Screen name="Home" component={Dashboard} options={{ tabBarIcon: ({ color }) => <Home color={color} /> }} />
      <Tab.Screen name="History" component={History} options={{ tabBarIcon: ({ color }) => <List color={color} /> }} />
      <Tab.Screen name="Add" component={AddExpense} options={{ tabBarIcon: ({ color }) => <PlusCircle color={color} /> }} />
      <Tab.Screen name="Stats" component={Analytics} options={{ tabBarIcon: ({ color }) => <PieChart color={color} /> }} />
      <Tab.Screen name="Settings" component={Profile} options={{ tabBarIcon: ({ color }) => <Settings color={color} /> }} />
    </Tab.Navigator>
  );
}