import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ApprovalScreen from '../screens/ApprovalScreen';
import SuccessScreen from '../screens/SuccessScreen';

export type RootStackParamList = {
  Approval: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Approval"
        component={ApprovalScreen}
        options={{
          title: 'Customer Approval',
        }}
      />

      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{
          title: 'Success',
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;