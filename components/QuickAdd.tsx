import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addExpense } from '../store/slices/expenseSlice';
import { useTheme } from '../context/ThemeContext';

function QuickAdd() {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleQuickAdd = () => {
    if (!amount || !description) return;

    const newExpense = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      description,
      category: 'uncategorized',
      date: new Date().toISOString(),
    };

    dispatch(addExpense(newExpense));
    setAmount('');
    setDescription('');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Amount"
        placeholderTextColor={theme.textSecondary}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Description"
        placeholderTextColor={theme.textSecondary}
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.accent }]}
        onPress={handleQuickAdd}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
export { QuickAdd };

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 8,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});