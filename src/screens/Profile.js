// src/screens/Profile.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.userName}>Job Seeker</Text>
        <Text style={styles.userEmail}>developer@example.com</Text>
      </View>
      
      <TouchableOpacity style={styles.button}><Text>Currency Settings</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text>Dark Mode</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, { borderBottomWidth: 0 }]}><Text style={{ color: 'red' }}>Logout</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', padding: 20 },
  header: { alignItems: 'center', marginVertical: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#cbd5e1', marginBottom: 10 },
  userName: { fontSize: 20, fontWeight: 'bold' },
  userEmail: { color: '#64748b' },
  button: { backgroundColor: '#fff', padding: 15, borderBottomWidth: 1, borderColor: '#f1f5f9' }
});
