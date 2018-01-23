/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ScrollViewSlide = (props) => (

  <View style={styles.viewStyle}>
    <ImageBackground
      source={{uri: props.data.link}}
      style={styles.backgroundImageStyle}
    >
      <View>
        <Text style={styles.textStyle}>
          {props.data.text}
        </Text>
      </View>
    </ImageBackground>
  </View>
);

export default ScrollViewSlide;

const styles = StyleSheet.create({
  viewStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  textStyle: {
    fontSize: 40,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
