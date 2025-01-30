import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeContext';
import { Expense } from '../types';

interface ExpenseChartProps {
  expenses: Expense[];
}

export default function ExpenseChart({ expenses }: ExpenseChartProps) {
  const { theme } = useTheme();

  // Kategorilere göre harcamaları grupla
  const categoryTotals: { [key: string]: number } = {};
  expenses.forEach(expense => {
    categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
  });

  // Grafiğe uygun veri formatına dönüştür
  const chartData = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    amount: categoryTotals[category],
    color: `hsl(${index * 60}, 70%, 50%)`, // Renkleri değişken hale getir
    legendFontColor: theme.text,
    legendFontSize: 14,
  }));

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Expense Chart</Text>
      {chartData.length > 0 ? (
        <PieChart
          data={chartData}
          width={300}
          height={180}
          chartConfig={{
            backgroundGradientFrom: theme.background,
            backgroundGradientTo: theme.background,
            color: () => theme.text,
            labelColor: () => theme.text,
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      ) : (
        <Text style={{ color: theme.text }}>No data available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
