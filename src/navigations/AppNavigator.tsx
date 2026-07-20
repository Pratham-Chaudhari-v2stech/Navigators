import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import RootDrawer from './RootDrawer'
import CourseDetails from '../screens/CourseDetails'
import AddCourse from '../screens/AddCourse'
import { RootStackParamList } from '../types/type'




const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='RootDrawer' component={RootDrawer} options={{ headerShown: false }} />
            <Stack.Screen name='AddCourse' component={AddCourse} options={{ title: "Add Course", }} />
            <Stack.Screen name='CourseDetails' component={CourseDetails} options={{ title: "Course Details", }} />
        </Stack.Navigator>
    )
}