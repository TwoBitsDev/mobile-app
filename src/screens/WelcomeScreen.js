// RN Dependencies
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

// ACs & Rs

// Components
import AuthButton from '../components/AuthButton';
import ScrollViewSlide from '../components/ScrollViewSlide';
// Global Variables
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const data = [
  {
    link: 'https://i.imgur.com/cxqoeUJ.jpg',
    text: 'Slide X Text'
  },
  {
    link: 'https://i.pinimg.com/564x/84/4d/69/844d69d8e0cbb066fcd5358da27a52ac.jpg',
    text: 'Slide Y Text'
  },
  {
    link: 'https://i.pinimg.com/736x/c4/ed/9a/c4ed9a8205892f6f085464057d37b079--phone-wallpapers-desktop-backgrounds.jpg',
    text: 'Slide Z Text'
  },
];

export default class WelcomeScreen extends Component {

  static navigationOptions = {
    header: null,
  }

  // Animated ScrollView backend
  xOffset = new Animated.Value(0)
  ScrollEvent = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          x: this.xOffset
        }
      }
    }
  ])

  renderSlides = (data) => {
    return data.map((item, index) => {
      return (
        <ScrollViewSlide key={index} data={item} />
      );
    });
  }

  renderCircleIndicators = (data, position) => {
    return data.map((_, i) => {
    let opacity = position.interpolate({
      inputRange: [i - 1, i, i + 1],
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp'
    });
    return (
      <Animated.View key={i} style={[styles.indicatorStyle, { opacity }]} />
      );
    });
  }

  // Button backend
  onGetStartedPress = () => {
    console.log('Get Started Pressed');
  }
  onLoginPress = () => {
    console.log('Login Pressed');
  }

  render() {
    let position = Animated.divide(
      this.xOffset,
      Dimensions.get('screen').width
    );

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewStyle}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={this.ScrollEvent}
          scrollEventThrottle={16}
        >
          {this.renderSlides(data)}
        </ScrollView>

        <View style={styles.indicatorContainerStyle}>
          {this.renderCircleIndicators(data, position)}
        </View>

        <View style={styles.logoContainerStyle}>
          <Image
            source={require('../../assets/transparent_small.png')}
            style={styles.logoImageStyle}
          />
        </View>

        <AuthButton
          buttonStyle={[ styles.buttonStyle, styles.getStartedStyle ]}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={this.onGetStartedPress}
        >
          Get Started
        </AuthButton>

        <AuthButton
          buttonStyle={[ styles.buttonStyle, styles.loginStyle ]}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={this.onLoginPress}
        >
          Log In
        </AuthButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    position: 'absolute',
    flex: 1,
  },
  logoContainerStyle: {
    position: 'absolute',
    top: SCREEN_HEIGHT*0.20,
    width: SCREEN_WIDTH*0.20,
    height: SCREEN_HEIGHT*0.20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImageStyle: {
    flex: 1,
    resizeMode: 'contain',
    width: SCREEN_WIDTH
  },
  indicatorContainerStyle: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: SCREEN_HEIGHT*0.25 + 10,
    height: 18,
    width: SCREEN_WIDTH*0.80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorStyle: {
    height: 10,
    width: 10,
    backgroundColor: 'white',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 5,
  },
  buttonStyle: { // generic button style, overlaid with ones below
    backgroundColor: 'transparent',
    position: 'absolute',
    width: SCREEN_WIDTH*0.80,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  getStartedStyle: {
    top: SCREEN_HEIGHT*0.75,
    backgroundColor: '#6A7EFC',
  },
  loginStyle: {
    top: SCREEN_HEIGHT*0.75 + 60,
    backgroundColor: 'rgba(73, 73, 83, 0.5)',
    marginTop: 15,
  },
  buttonTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});
