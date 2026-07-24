import AsyncStorage from '@react-native-async-storage/async-storage';
import { Expense } from '../types/expense';

const EXPENSES_KEY = 'expenses';

export const getExpenses = async (): Promise<Expense[]> => {
  try {
    const data = await AsyncStorage.getItem(EXPENSES_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.error('Error loading expenses:', error);
    return [];
  }
};

export const saveExpenses = async (
  expenses: Expense[],
): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      EXPENSES_KEY,
      JSON.stringify(expenses),
    );
  } catch (error) {
    console.error('Error saving expenses:', error);
  }
};

export const addExpense = async (
  expense: Expense,
): Promise<void> => {
  try {
    const expenses = await getExpenses();

    expenses.push(expense);

    await saveExpenses(expenses);
  } catch (error) {
    console.error('Error adding expense:', error);
  }
};

export const deleteExpense = async (
  expenseId: string,
): Promise<void> => {
  try {
    const expenses = await getExpenses();

    const updatedExpenses = expenses.filter(
      expense => expense.id !== expenseId,
    );

    await saveExpenses(updatedExpenses);
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
};