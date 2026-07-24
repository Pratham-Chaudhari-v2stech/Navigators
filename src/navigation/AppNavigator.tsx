import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseHistoryScreen from '../screens/ExpenseHistoryScreen';
import { RootStackParamList } from '../types/expense';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Expense Tracker',
        }}
      />

      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          title: 'Add Expense',
        }}
      />

      <Stack.Screen
        name="ExpenseHistory"
        component={ExpenseHistoryScreen}
        options={{
          title: 'Expense History',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;