// src/screens/Analytics.js
import { View, Text, StyleSheet } from 'react-native';

export default function Analytics() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Insights</Text>
      <View style={styles.placeholderChart}>
        <Text style={{ color: '#64748b' }}>[ Chart Visualization Coming Soon ]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, alignSelf: 'flex-start' },
  placeholderChart: { width: '100%', height: 200, backgroundColor: '#f8fafc', borderRadius: 15, justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderWidth: 2, borderColor: '#cbd5e1' }
});