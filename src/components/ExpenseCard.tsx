import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Expense } from '../types/expense';

interface ExpenseCardProps {
  expense: Expense;
  onDelete?: (id: string) => void;
}

const ExpenseCard = ({ expense, onDelete }: ExpenseCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{expense.title}</Text>

        <Text style={styles.category}>
          {expense.category}
        </Text>

        <Text style={styles.date}>
          {expense.date}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.amount}>
          ₹ {expense.amount.toFixed(2)}
        </Text>

        {onDelete && (
          <Pressable
            onPress={() => onDelete(expense.id)}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,
    marginVertical: 8,

    borderRadius: 10,

    elevation: 2,
  },

  infoContainer: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  category: {
    marginTop: 4,
    color: '#666',
  },

  date: {
    marginTop: 4,
    color: '#999',
    fontSize: 12,
  },

  rightContainer: {
    alignItems: 'flex-end',
  },

  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
  },

  deleteButton: {
    marginTop: 10,
  },

  deleteText: {
    color: 'red',
    fontWeight: '600',
  },
});