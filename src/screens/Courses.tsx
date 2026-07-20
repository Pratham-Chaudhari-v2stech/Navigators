import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../types/type';
import { RootDrawerParamList } from '../types/type';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { useFocusEffect } from '@react-navigation/native';
import { getCourses } from '../storage/courseStorage';

type Props = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, 'Courses'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Courses({ navigation }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);

  useFocusEffect(
    useCallback(() => {
      const loadCourses = async () => {
        const data = await getCourses();
        setCourses(data);
      };

      loadCourses();
    }, []),
  );

  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('CourseDetails', {
          course: item,
        })
      }
    >
      <Text style={styles.title}>{item.title}</Text>

      <Text>Instructor : {item.instructor}</Text>

      <Text>Duration : {item.duration}</Text>

      <Text>Level : {item.level}</Text>
    </TouchableOpacity>
  );

  if (courses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Courses Available</Text>

        <Text style={styles.emptySubtitle}>Please add a new course.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddCourse')}
        >
          <Text style={styles.buttonText}>Add Course</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddCourse')}
      >
        <Text style={styles.plus}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F7FB',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
  },

  emptySubtitle: {
    color: '#777',
    marginTop: 10,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 25,
    backgroundColor: '#2563EB',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },

  plus: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  debugButton: {
    position: 'absolute',
    right: 20,
    top: 10,
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    zIndex: 10,
  },
  debugText: {
    color: '#fff',
    fontSize: 12,
  },
});
