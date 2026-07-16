import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Deal } from '../constants/deals';
import { moderateScale } from 'react-native-size-matters';

interface DealCardProps {
  item: Deal;
}

export default function DealCard({ item }: DealCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        Customer:
        <Text style={styles.value}> {item.customer}</Text>
      </Text>

      <Text style={styles.label}>
        Company:
        <Text style={styles.value}> {item.company}</Text>
      </Text>

      <Text style={styles.label}>
        Amount:
        <Text style={styles.amount}> ₹{item.amount}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: moderateScale(8),
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: moderateScale(4),
  },
  label: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginBottom: moderateScale(6),
  },
  value: {
    fontWeight: '400',
    fontSize: moderateScale(14),
  },
  amount: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: moderateScale(16), 
  },
});