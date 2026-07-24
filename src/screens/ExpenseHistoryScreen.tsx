import React, { useCallback, useState } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import EmptyState from '../components/EmptyState';
import ExpenseCard from '../components/ExpenseCard';
import { deleteExpense, getExpenses } from '../storage/expenseStorage';
import { Expense } from '../types/expense';

const ExpenseHistoryScreen = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data.reverse());
  };

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, []),
  );

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteExpense(id);
            loadExpenses();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {expenses.length === 0 ? (
        <EmptyState message="No expenses found." />
      ) : (
        <FlatList
          data={expenses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ExpenseCard
              expense={item}
              onDelete={handleDelete}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default ExpenseHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});