// RN Dependencies
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

// ACs & Rs
import {
  loginEmailChanged,
  loginPasswordChanged,
} from '../actions';

// Components
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import BackButton from '../components/BackButton';

// Global Variables
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const imageLink = 'https://i.imgur.com/sMnesOA.png';

const backTransition = NavigationActions.back({ key: 'welcome' });

const mapStateToProps = ({ auth }) => {
  const { login_email, login_password } = auth;
  return { login_email, login_password };
};

export default connect(mapStateToProps, { loginEmailChanged, loginPasswordChanged})(class LoginScreen extends Component {

  static navigationOptions = {
    headerBackTitle: "Back",
  }



  onEmailChanged = (text) => {
    this.props.loginEmailChanged(text);
  }

  onPasswordChanged = (text) => {
    this.props.loginPasswordChanged(text);
  }

  onLetsGoPress = () => {
    console.log("Let's Go!");
    console.log(this.props.login_email);
    console.log(this.props.login_password);
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthInput
          style={styles.textInputStyle}
          placeholderText="Your Email"
          placeholderColor="lightgrey"
          autocorrect={ false }
          onChangeText={ this.onEmailChanged }
          value={ this.props.login_email }
          secureTextEntry={ false }
        />

        <AuthInput
          style={styles.textInputStyle}
          placeholderText="Your password"
          placeholderColor="lightgrey"
          autocorrect={ false }
          onChangeText={ this.onPasswordChanged }
          value={ this.props.login_password }
          secureTextEntry
        />

        <AuthButton
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={this.onLetsGoPress}
        >
          Let's go!
        </AuthButton>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  textInputStyle: {
    height: 50,
    width: SCREEN_WIDTH*0.75,
    fontSize: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  buttonStyle: {
    backgroundColor: '#6A7EFC',
    width: SCREEN_WIDTH*0.75,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});

/*
<ImageBackground
  source={{uri: imageLink}}
  style={styles.backgroundImageStyle}
>
other code
</ImageBackground>


<View style={{position: 'absolute', top: 25, left: 10}}>
  <BackButton
    style={styles.backButtonStyle}
    onPress={this.onBackButtonPress}
  />
</View>

onBackButtonPress = () => {

  //this.props.navigation.navigate('welcome');
  //this.props.navigation.dispatch(backTransition);
  this.props.navigation.goBack('welcome');
}
*/