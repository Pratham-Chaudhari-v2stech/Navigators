import React, { useState,useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Course } from '../types/type';
import { addCourse } from '../storage/courseStorage';

export default function AddCourse({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');


 const validate = async () => {
  if (
    !title.trim() ||
    !instructor.trim() ||
    !duration.trim() ||
    !level.trim() ||
    !description.trim()
  ) {
    Alert.alert('Please fill all fields.');
    return;
  }

  const newCourse: Course = {
    id: Date.now().toString(),
    title,
    instructor,
    duration,
    level,
    description,
  };

  try {
    await addCourse(newCourse);

    navigation.goBack();
  } catch (error) {
    Alert.alert('Error', 'Failed to save course.');
  }
};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Text style={styles.heading}>Add New Course</Text>

          <TextInput
            placeholder="Course Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <TextInput
            placeholder="Instructor"
            value={instructor}
            onChangeText={setInstructor}
            style={styles.input}
          />

          <TextInput
            placeholder="Duration"
            value={duration}
            onChangeText={setDuration}
            style={styles.input}
          />

          <TextInput
            placeholder="Level"
            value={level}
            onChangeText={setLevel}
            style={styles.input}
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.description]}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={validate}
          >
            <Text style={styles.buttonText}>
              Save Course
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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

  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },

  description: {
    height: 120,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});