import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function BudgetScreen() {
  const { theme } = useTheme();

  const budgets = [
    { category: 'Food', budget: 600, spent: 500 },
    { category: 'Transport', budget: 400, spent: 300 },
    { category: 'Shopping', budget: 300, spent: 250 },
    { category: 'Bills', budget: 500, spent: 450 },
    { category: 'Entertainment', budget: 300, spent: 200 },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {budgets.map((item, index) => (
        <View 
          key={index} 
          style={[styles.budgetCard, { backgroundColor: theme.cardBackground }]}
        >
          <View style={styles.budgetHeader}>
            <Text style={[styles.categoryName, { color: theme.text }]}>{item.category}</Text>
            <Text style={[styles.budgetAmount, { color: theme.text }]}>
              ${item.spent} / ${item.budget}
            </Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${(item.spent / item.budget) * 100}%` },
                { backgroundColor: item.spent > item.budget ? theme.error : theme.accent }
              ]} 
            />
          </View>
          
          <Text style={[styles.remaining, { color: theme.textSecondary }]}>
            ${item.budget - item.spent} remaining
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  budgetCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
  },
  budgetAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  progressContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  remaining: {
    marginTop: 8,
    fontSize: 14,
  },
});