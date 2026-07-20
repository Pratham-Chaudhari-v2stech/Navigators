import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../types/type'

const COURSE_KEY = 'COURSES';

export const getCourses = async (): Promise<Course[]> => {
  try {
    const data = await AsyncStorage.getItem(COURSE_KEY);
    console.log('[courseStorage] getCourses raw:', data);

    if (data) {
      const parsed = JSON.parse(data);
      console.log('[courseStorage] getCourses parsed count:', Array.isArray(parsed) ? parsed.length : 'not-array');
      return parsed;
    }

    return [];
  } catch (error) {
    console.log('[courseStorage] getCourses error:', error);
    return [];
  }
};

export const saveCourses = async (
  courses: Course[],
): Promise<void> => {
  try {
    const payload = JSON.stringify(courses);
    console.log('[courseStorage] saveCourses payload length:', payload.length);
    await AsyncStorage.setItem(COURSE_KEY, payload);
    console.log('[courseStorage] saveCourses saved');
  } catch (error) {
    console.log('[courseStorage] saveCourses error:', error);
  }
};

export const addCourse = async (
  course: Course,
): Promise<void> => {
  try {
    const courses = await getCourses();

    courses.push(course);

    await saveCourses(courses);

  } catch (error) {
    console.log('[courseStorage] addCourse error:', error);
    throw error;
  }
};