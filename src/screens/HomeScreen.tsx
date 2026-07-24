import React, { useCallback, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ExpenseCard from '../components/ExpenseCard';
import TotalExpenseCard from '../components/TotalExpenseCard';
import EmptyState from '../components/EmptyState';
import { getExpenses } from '../storage/expenseStorage';
import { Expense } from '../types/expense';
import { RootStackParamList } from '../types/expense';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadExpenses();
    }, []),
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const recentExpenses = expenses.slice(-5).reverse();

  return (
    <SafeAreaView style={styles.container}>
      <TotalExpenseCard total={totalExpense} />

      <View style={styles.buttonContainer}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate('AddExpense')}
        />

        <Button
          title="View All"
          onPress={() =>
            navigation.navigate('ExpenseHistory')
          }
        />
      </View>

      <Text style={styles.heading}>Recent Expenses</Text>

      {recentExpenses.length === 0 ? (
        <EmptyState message="No expenses added yet." />
      ) : (
        <FlatList
          data={recentExpenses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ExpenseCard expense={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  buttonContainer: {
    gap: 10,
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});