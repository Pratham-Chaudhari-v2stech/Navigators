import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'CourseDetails'
>;

export default function CourseDetails({ route }: Props) {
  const { course } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.card}>
        <Text style={styles.title}>
          {course.title}
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Instructor</Text>
          <Text style={styles.value}>
            {course.instructor}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>
            {course.duration}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Level</Text>
          <Text style={styles.value}>
            {course.level}
          </Text>
        </View>

        <Text style={styles.descriptionHeading}>
          Description
        </Text>

        <Text style={styles.description}>
          {course.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    padding: 20,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },

  row: {
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    fontWeight: '600',
  },

  descriptionHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
});