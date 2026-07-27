import React, { useEffect, useRef } from 'react';
import { AppState, AppStateStatus, Text, View } from 'react-native';

const AppStateScreen = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      (nextAppState: AppStateStatus) => {
        console.log('Previous State:', appState.current);
        console.log('Current State:', nextAppState);

        if (
          appState.current === 'background' &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground');
        }

        if (nextAppState === 'background') {
          console.log('App has gone to the background');
        }

        appState.current = nextAppState;
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Current App State: {appState.current}</Text>
    </View>
  );
};

export default AppStateScreen;