import React, { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/expense';
import { Expense } from '../types/expense';
import { CATEGORIES } from '../constants/categories';
import { addExpense } from '../storage/expenseStorage';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AddExpense'
>;

const AddExpenseScreen = ({ navigation }: Props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES[0],
  );

  const handleSave = async () => {
    if (!title.trim() || !amount.trim()) {
      Alert.alert('Validation', 'Please fill all fields.');
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      title,
      amount: Number(amount),
      category: selectedCategory,
      date: new Date().toLocaleDateString(),
    };

    await addExpense(newExpense);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Expense Title</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Amount</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryContainer}>
        {CATEGORIES.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category &&
                styles.selectedCategory,
            ]}
            onPress={() =>
              setSelectedCategory(category)
            }
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button
        title="Save Expense"
        onPress={handleSave}
      />
    </SafeAreaView>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
  },

  categoryButton: {
    borderWidth: 1,
    borderColor: '#4F46E5',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    margin: 4,
  },

  selectedCategory: {
    backgroundColor: '#C7D2FE',
  },
});