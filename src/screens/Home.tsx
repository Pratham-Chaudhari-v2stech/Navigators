import React ,{useCallback, useState}from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {getCourses} from '../storage/courseStorage';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Course } from '../types/type';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/type';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/type';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

type Props = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Home({ navigation }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);

  useFocusEffect(
  useCallback(() => {
    const loadCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };

    loadCourses();
  }, [])
);
  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>
         Welcome
      </Text>

      <Text style={styles.title}>
        Student Course Manager
      </Text>

      <Text style={styles.description}>
        Manage your enrolled courses efficiently.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Total Courses
        </Text>

        <Text style={styles.count}>
         {courses.length}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}
      >
        <Text style={styles.buttonText}>
          View Courses
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddCourse')}
      >
        <Text style={styles.buttonText}>
          Add Course
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  welcome: {
    fontSize: 18,
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 10,
  },

  description: {
    color: '#666',
    marginTop: 10,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    marginBottom: 30,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  count: {
    fontSize: 45,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});