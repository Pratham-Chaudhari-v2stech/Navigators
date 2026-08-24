import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileHeader = () => {
  return (
    <LinearGradient
      colors={['#4F46E5', '#06B6D4']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      className="rounded-b-3xl px-6 py-6">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-sm text-white/80">
            Day 21
          </Text>

          <Text className="mt-1 text-2xl font-bold text-white">
            My Profile
          </Text>
        </View>

        <View className="h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <Text className="text-2xl text-white">◉</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileHeader;