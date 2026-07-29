import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FadeBox from '../components/FadeBox';
import ScaleCard from '../components/ScaleCard';
import SwipeableItem from '../components/SwipeableItem';

import { TASKS } from '../data/tasks';


const AnimationDemoScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Animations & Gestures Demo
      </Text>


      {/* Fade Animation */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          1. Fade Animation
        </Text>

        <FadeBox />

      </View>



      {/* Scale Animation */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          2. Tap Scale Animation
        </Text>

        <ScaleCard />

      </View>



      {/* Swipe Gesture */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          3. Swipe To Delete
        </Text>


        <FlatList
          data={TASKS}
          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (
            <SwipeableItem
              title={item.title}
            />
          )}

          scrollEnabled={false}
        />

      </View>


    </ScrollView>
  );
};



const styles = StyleSheet.create({

  container: {
    padding: 20,
  },


  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 25,
  },


  section: {
    marginBottom: 30,
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },

});


export default AnimationDemoScreen;