import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { deleteExpense } from '../store/slices/expenseSlice';
import { useTheme } from '../context/ThemeContext';
import { Expense } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  const renderItem = ({ item }: { item: Expense }) => (
    <Animated.View style={[styles.rowFront, { backgroundColor: theme.cardBackground }]}>
      <Text style={[styles.expenseTitle, { color: theme.text }]}>{item.description}</Text>
      <Text style={[styles.expenseAmount, { color: theme.accent }]}>
        ${item.amount.toFixed(2)}
      </Text>
    </Animated.View>
  );

  const renderHiddenItem = ({ item }: { item: Expense }) => (
    <View style={styles.rowBack}>
      <Text style={styles.deleteBtn} onPress={() => dispatch(deleteExpense(item.id))}>
        Delete
      </Text>
    </View>
  );

  return (
    <SwipeListView
      data={expenses}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75}
      disableRightSwipe
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  rowFront: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBack: {
    alignItems: 'flex-end',
    backgroundColor: '#ff4444',
    flex: 1,
    marginVertical: 8,
    borderRadius: 12,
    justifyContent: 'center',
    paddingRight: 16,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  deleteBtn: {
    color: 'white',
    fontWeight: '600',
  },
});
