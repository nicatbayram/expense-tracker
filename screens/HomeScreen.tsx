import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import ExpenseChart from '../components/ExpenseChart';
import { useTheme } from '../context/ThemeContext';
import ExpenseList from '../components/ExpenseList';
import { QuickAdd } from '../components/QuickAdd';


export default function HomeScreen() {
  const { theme } = useTheme();
  const expenses = useAppSelector(state => state.expenses.expenses);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$2,459.50</Text>
        <View style={styles.balanceChange}>
          <Text style={styles.balanceChangeText}>+$249.50 this month</Text>
        </View>
      </View>
      
      <ExpenseChart expenses={expenses} />
      <QuickAdd />
      <ExpenseList expenses={expenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  balanceCard: {
    backgroundColor: '#BB86FC',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  balanceChange: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  balanceChangeText: {
    color: '#fff',
    fontSize: 14,
  },
});
