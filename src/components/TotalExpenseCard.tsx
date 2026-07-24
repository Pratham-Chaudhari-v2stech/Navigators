import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TotalExpenseCardProps {
  total: number;
}

const TotalExpenseCard = ({ total }: TotalExpenseCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expenses</Text>
      <Text style={styles.amount}>₹ {total.toFixed(2)}</Text>
    </View>
  );
};

export default TotalExpenseCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    padding: 20,
    marginVertical: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
});