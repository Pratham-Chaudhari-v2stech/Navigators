import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ScaleCard = () => {
  const scale = useRef(
    new Animated.Value(1)
  ).current;


  const handlePress = () => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.15,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };


  return (
    <View style={styles.container}>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <Animated.View
          style={[
            styles.card,
            {
              transform: [
                {
                  scale,
                },
              ],
            },
          ]}
        >
          <Text style={styles.title}>
            React Native Animation
          </Text>

          <Text style={styles.description}>
            Tap me to scale
          </Text>

        </Animated.View>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  card: {
    width: 280,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  description: {
    marginTop: 8,
    fontSize: 14,
  },
});


export default ScaleCard;