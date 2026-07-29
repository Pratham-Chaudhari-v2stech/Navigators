import React, { useRef, useState } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  View,
} from 'react-native';

const FadeBox = () => {
  const opacity = useRef(new Animated.Value(1)).current;

  const [visible, setVisible] = useState(true);

  const toggleFade = () => {
    Animated.timing(opacity, {
      toValue: visible ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setVisible(!visible);
  };

  return (
    <View style={styles.container}>

      <Animated.View
        style={[
          styles.box,
          {
            opacity,
          },
        ]}
      />

      <Button
        title={visible ? 'Fade Out' : 'Fade In'}
        onPress={toggleFade}
      />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  box: {
    width: 120,
    height: 120,
    backgroundColor: 'tomato',
    marginBottom: 20,
    borderRadius: 10,
  },
});


export default FadeBox;