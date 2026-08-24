import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CustomIllustration from '../components/CustomIllustration';
import ProfileHeader from '../components/ProfileHeader';
import StatusAnimation from '../components/StatusAnimation';

const ProfileDemoScreen = () => {
  const handleContinue = () => {
    console.log('Continue pressed');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ProfileHeader />

      <View className="flex-1 px-6 py-6">
        <View className="items-center">
          <CustomIllustration />

          <Text className="mt-4 text-2xl font-bold text-gray-900">
            Welcome, Pratham!
          </Text>

          <Text className="mt-2 text-center text-base text-gray-500">
            Your profile has been successfully completed.
          </Text>
        </View>

        <View className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <View className="flex-row items-center">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Text className="text-lg text-green-600">✓</Text>
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-base font-bold text-gray-900">
                Profile Status
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                All required details are completed.
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-5 items-center">
          <StatusAnimation type="success" />
        </View>

        <View className="mt-auto">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleContinue}
            className="flex-row items-center justify-center rounded-2xl bg-indigo-600 px-5 py-4">
            <Text className="mr-2 text-base font-bold text-white">
              Continue
            </Text>

            <Text className="text-xl text-white">→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileDemoScreen;