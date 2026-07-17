import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployeeList from '../screens/Employees/EmployeeList'
import EmployeeDetails from '../screens/Employees/EmployeeDetails';
import AddEmployee from '../screens/Employees/AddEmployee'

import { EmployeeStackParamList } from './types';

const Stack = createNativeStackNavigator<EmployeeStackParamList>();

export default function EmployeeStack() {
  return (
    <Stack.Navigator
      initialRouteName="EmployeeList"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="EmployeeList"
        component={EmployeeList}
        options={{
          title: 'Employees',
        }}
      />

      <Stack.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          title: 'Employee Details',
        }}
      />

      <Stack.Screen
        name="AddEmployee"
        component={AddEmployee}
        options={{
          title: 'Add Employee',
        }}
      />
    </Stack.Navigator>
  );
}