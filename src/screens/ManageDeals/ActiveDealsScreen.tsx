import React from 'react';
import { View, FlatList, StyleSheet, Pressable, Text } from 'react-native';
import { useState } from 'react';

import { ACTIVE_DEALS } from '../../constants/deals';
import DealCard from '../../components/DealCard';
import { TextInput } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';

export default function ActiveDealsScreen() {
  type Deal = {
    id: string,
    customer: string,
    company: string,
    amount: number,
  }
  const [deals, setDeals] = useState<Deal[]>([]);
  const [formData, setFormData] = useState<Deal>({
    id: '',
    customer: '',
    company: '',
    amount: 0,
  });
  const onChange = (value: string, field: keyof Deal) => {
    setFormData({
      ...formData,
      id: Date.now().toString(),
      [field]: field === 'amount' ? Number(value) : value,
    })
  }
  const handleSubmit = () => {
    if (
      formData.customer.trim() === '' ||
      formData.company.trim() === '' ||
      formData.amount < 0
    ) {
      return;
    }

    setDeals((prevDeals) => [
      ...prevDeals,
      formData,
    ]);

    setFormData({
      id: '',
      customer: '',
      company: '',
      amount: 0,
    });
  };
  console.log(deals)
  return (
    <View style={styles.container}>
      <View>
        <TextInput onChangeText={(Text) => onChange(Text, 'customer')}
          style={styles.field} placeholder='Enter Customer Name'
          value={formData.customer} />
        <TextInput style={styles.field} placeholder='Enter Company Name'
          onChangeText={(Text) => onChange(Text, 'company')}
          value={formData.company} />
        <TextInput onChangeText={(Text) => onChange(Text, 'amount')}
          style={styles.field} placeholder='Enter Amount'
          keyboardType='numeric'
          value={formData.amount.toString()} />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

          <Pressable style={styles.add}
            onPress={handleSubmit}
          >
            <Text style={styles.btntxt}>Add</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DealCard item={item} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(12),
  },

  field: {
    borderWidth: 1,
    borderRadius: moderateScale(20),
    paddingLeft: moderateScale(20),
    marginBottom: moderateScale(5),
  },

  add: {
    backgroundColor: 'skyblue',
    width: moderateScale(70),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(8),
    margin: moderateScale(10),
  },

  btntxt: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: 'white',
  },
});