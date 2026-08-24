import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

type StatusAnimationProps = {
  type?: 'loading' | 'success';
};

const StatusAnimation = ({type = 'success'}: StatusAnimationProps) => {
  if (type === 'loading') {
    return (
      <View className="items-center">
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text className="mt-3 text-lg font-bold text-indigo-600">
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View className="items-center">
      <View className="h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <Text className="text-4xl text-green-600">✓</Text>
      </View>
      <Text className="mt-3 text-lg font-bold text-green-600">
        Profile Complete
      </Text>
    </View>
  );
};

export default StatusAnimation;
