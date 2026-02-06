import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFinanceStore } from '../store/useFinanceStore';

export default function Dashboard() {
  const transactions = useFinanceStore((state) => state.transactions);

  // Calculate real total
  const totalBalance = transactions.reduce((acc, item) => acc + item.amount, 0);
  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.balance}>${totalBalance.toLocaleString()}</Text>
      </View>

      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.txItem}>
            <Text>{item.title}</Text>
            <Text style={{ color: item.amount > 0 ? 'green' : 'red' }}>
              {item.amount > 0 ? `+$${item.amount}` : `-$${Math.abs(item.amount)}`}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  balanceCard: { backgroundColor: '#2563eb', padding: 30, borderRadius: 20, marginBottom: 20 },
  label: { color: '#fff', opacity: 0.8 },
  balance: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  txItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderColor: '#eee' }
});