import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import CustomButton from './components/CustomButton';
import { moderateScale } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;
console.log(Platform.OS);

export default function Dimension() {
  let name: string = 'pratham'
  const num: number = 89;
  let bool: boolean = true;
  let age: any = 78;
  let car: unknown = ['deed', 'ujsd']

  let marks: number[] = [1, 2, 4, 5]
  let fruits: string[] = ['ded', 'frw']
  let numbers: Array<number> = [2, 4, 5]

  let theme: "dark" | "light";
  theme = "dark";

  let student: {
    name: string;
    age: number;
  } = {
    name: "Pratham",
    age: 24
  }

  //type 
  // type User={
  //     name:string;
  //     age:number;
  //     isActive:boolean;
  // }

  // const user:User={
  //     name:"Pratham",
  //     age:24,
  //     isActive:true,
  // };

  //interface
  interface User {
    name: string;
    age: number;
    email?: string;
  }
  const user: User = {
    name: 'pratham',
    age: 21,
    email: 'sidhwewe'
  }

  function getUser(): User {
    return {
      name: "Pratham",
      age: 24,
    };
  }

  function add(a: number, b: number): number {
    return a + b;
  }

  function greet(): void {
    console.log('Hello')
  }


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/images.png')}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Pratham</Text>

        <Text style={styles.role}>
          React Native Developer
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>pratham@example.com</Text>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+91 98765 43210</Text>

          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Mumbai, India</Text>
        </View>
      </View>
      <CustomButton
        title="View Profile"
        onPress={() => {
          console.log("button Clicked")
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  card: {
    width: screenWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: moderateScale(15),
    padding: moderateScale(20),
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: moderateScale(5),
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: moderateScale(2),
        },
        shadowOpacity: 0.3,
        shadowRadius: moderateScale(5),
      },
    }),
  },

  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(15),
  },

  name: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },

  role: {
    fontSize: moderateScale(16),
    color: 'gray',
    marginBottom: moderateScale(20),
  },

  infoContainer: {
    width: '100%',
  },

  label: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
  },

  value: {
    fontSize: moderateScale(16),
    color: '#555',
  },
});