import React, { useRef } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface SwipeableItemProps {
  title: string;
}

const SwipeableItem = ({ title }: SwipeableItemProps) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },

      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -120) {
          Animated.spring(translateX, {
            toValue: -100,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.wrapper}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteText}>Delete</Text>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.item,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    overflow: 'hidden',
    borderRadius: 10,
  },

  item: {
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  deleteContainer: {
    position: 'absolute',
    right: 0,
    width: 100,
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default SwipeableItem;