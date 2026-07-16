import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CLOSED_DEALS } from '../../constants/deals';
import DealCard from '../../components/DealCard';
import { moderateScale } from 'react-native-size-matters';

export default function ClosedDealsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CLOSED_DEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DealCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(12),
  },
});