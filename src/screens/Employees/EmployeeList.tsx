import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EmployeeStackParamList } from '../../navigation/types';
import EmployeeCard from '../../components/EmployeeCard';
import { employees } from '../../data/employees';

type Props = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeList'
>;

export default function EmployeeList({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEmployee')}
      >
        <Text style={styles.addButtonText}>+ Add Employee</Text>
      </TouchableOpacity>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EmployeeCard
            employee={item}
            onPress={() =>
              navigation.navigate('EmployeeDetails', {
                employeeId: item.id,
              })
            }
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  addButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  list: {
    paddingBottom: 20,
  },
});