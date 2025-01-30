import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import { useTheme } from '../context/ThemeContext';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function StatisticsScreen() {
  const { theme } = useTheme();
  const expenses = useAppSelector(state => state.expenses.expenses);

  const chartConfig = {
    backgroundGradientFrom: theme.cardBackground,
    backgroundGradientTo: theme.cardBackground,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const pieData = [
    { name: 'Food', amount: 500, color: '#FF6B6B', legendFontColor: theme.text },
    { name: 'Transport', amount: 300, color: '#4ECDC4', legendFontColor: theme.text },
    { name: 'Shopping', amount: 250, color: '#45B7D1', legendFontColor: theme.text },
    { name: 'Bills', amount: 450, color: '#96CEB4', legendFontColor: theme.text },
    { name: 'Entertainment', amount: 200, color: '#FFEEAD', legendFontColor: theme.text },
  ];

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      data: [1500, 1700, 1600, 1800, 1650, 1900],
    }],
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.title, { color: theme.text }]}>Spending by Category</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.title, { color: theme.text }]}>Monthly Spending Trend</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={[styles.summaryCard, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.title, { color: theme.text }]}>Monthly Summary</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>Total Spent</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>$1,900</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>Average/Day</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>$63.33</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  chart: {
    borderRadius: 16,
  },
  summaryCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  summaryItem: {
    flex: 1,
  },
  summaryLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '600',
  },
});