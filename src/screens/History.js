// src/screens/History.js
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFinanceStore } from '../store/useFinanceStore';

export default function History() {
  const transactions = useFinanceStore((state) => state.transactions);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.txTitle}>{item.title}</Text>
              <Text style={styles.txDate}>{item.date.split('T')[0]}</Text>
            </View>
            <Text style={[styles.amount, { color: item.amount > 0 ? '#10b981' : '#ef4444' }]}>
              {item.amount > 0 ? '+' : ''}${item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#1e293b' },
  item: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#f1f5f9' },
  txTitle: { fontSize: 16, fontWeight: '500' },
  txDate: { fontSize: 12, color: '#64748b' },
  amount: { fontSize: 16, fontWeight: 'bold' }
});