import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useFinanceStore } from '../store/useFinanceStore';

export default function AddExpense({ navigation }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const addTransaction = useFinanceStore((state) => state.addTransaction);

  const handleAdd = () => {
    if (!title || !amount) return Alert.alert("Error", "Fill all fields");
    addTransaction({
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title (e.g. Coffee)" style={styles.input} onChangeText={setTitle} />
      <TextInput placeholder="Amount (e.g. -5.00)" style={styles.input} keyboardType="numeric" onChangeText={setAmount} />
      <Button title="Save Transaction" color="#2563eb" onPress={handleAdd} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginBottom: 15 }
});