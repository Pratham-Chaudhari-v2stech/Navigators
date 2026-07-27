import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface RecentSearchItemProps {
  city: string;
  onPress: () => void;
}

const RecentSearchItem = ({
  city,
  onPress,
}: RecentSearchItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.city}>{city}</Text>
    </TouchableOpacity>
  );
};

export default RecentSearchItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },

  city: {
    fontSize: 16,
  },
});