/*eslint-disable*/

import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 1500);
  }, []);
  return (
    <View style={styles.constiner}>
      <View style={styles.welcome}>
        <LottieView
          style={{ flex: 1, height: 100 }}
          source={require('../Assets/Animation - 1704188891958.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.txt}>Wait a second...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  constiner: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    height: 300,
    aspectRatio: 1,
  },
  txt: {
    fontSize: 20,
    marginTop: 25,
    color: 'white',
    justifyContent: 'center'
  }
});
export default SplashScreen;
/*eslint-disable*/
