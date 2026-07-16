import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ActiveDealsScreen from '../screens/ManageDeals/ActiveDealsScreen';
import ClosedDealsScreen from '../screens/ManageDeals/ClosedDealsScreen';

export type ManageDealsTabParamList = {
  ActiveDeals: undefined;
  ClosedDeals: undefined;
};

const Tab = createBottomTabNavigator<ManageDealsTabParamList>();

export default function ManageDealsTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="ActiveDeals"
        component={ActiveDealsScreen}
        options={{
          title: 'Active Deals',
        }}
      />

      <Tab.Screen
        name="ClosedDeals"
        component={ClosedDealsScreen}
        options={{
          title: 'Closed Deals',
        }}
      />
    </Tab.Navigator>
  );
}