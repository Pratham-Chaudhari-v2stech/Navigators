import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EmployeeStackParamList } from '../../navigation/types';
import { employees } from '../../data/employees';

type Props = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeDetails'
>;

export default function EmployeeDetails({
  navigation,
  route,
}: Props) {
  const { employeeId } = route.params;

  const employee = employees.find(
    emp => emp.id === employeeId,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{employee?.id}</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{employee?.name}</Text>

        <Text style={styles.label}>Designation</Text>
        <Text style={styles.value}>
          {employee?.designation}
        </Text>

        <Text style={styles.label}>Department</Text>
        <Text style={styles.value}>
          {employee?.department}
        </Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>
          {employee?.email}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddEmployee')}
      >
        <Text style={styles.buttonText}>
          Add Employee
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 18,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },

  value: {
    fontSize: 16,
    marginTop: 4,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});