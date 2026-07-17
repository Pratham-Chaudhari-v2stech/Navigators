import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Employee = {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
};

type Props = {
  employee: Employee;
  onPress: () => void;
};

export default function EmployeeCard({
  employee,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View>
        <Text style={styles.name}>{employee.name}</Text>

        <Text style={styles.designation}>
          {employee.designation}
        </Text>

        <Text style={styles.department}>
          {employee.department}
        </Text>

        <Text style={styles.email}>
          {employee.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  designation: {
    marginTop: 6,
    fontSize: 16,
    color: '#444',
  },
  department: {
    marginTop: 4,
    fontSize: 15,
    color: '#666',
  },
  email: {
    marginTop: 6,
    fontSize: 14,
    color: '#888',
  },
});