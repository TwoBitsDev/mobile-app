// RN Dependencies
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

// ACs & Rs
import {
  gsEmailChanged,
  gsPwd1Changed,
  gsPwd2Changed,
} from '../actions';

// Components
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import BackButton from '../components/BackButton';

// Global Variables
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const mapStateToProps = ({ auth }) => {
  const { gs_email, gs_pwd1, gs_pwd2 } = auth;
  return { gs_email, gs_pwd1, gs_pwd2 };
}

export default connect(mapStateToProps, {gsEmailChanged, gsPwd1Changed, gsPwd2Changed})(class GetStartedScreen extends Component {
  /*
  static navigationOptions = {
    header: null,
  }
  */
  onEmailChanged = (text) => {
    this.props.gsEmailChanged(text);
  }

  onPwd1Changed = (text) => {
    this.props.gsPwd1Changed(text);
  }

  onPwd2Changed = (text) => {
    this.props.gsPwd2Changed(text);
  }

  onLetsGoPress = () => {
    console.log("Let's go (gs)!");
    console.log(this.props.gs_email);
    console.log(this.props.gs_pwd1);
    console.log(this.props.gs_pwd2);
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
          value={ this.props.gs_email }
          secureTextEntry={ false }
        />

        <AuthInput
          style={styles.textInputStyle}
          placeholderText="Your password"
          placeholderColor="lightgrey"
          autocorrect={ false }
          onChangeText={ this.onPwd1Changed }
          value={ this.props.gs_pwd1 }
          secureTextEntry
        />

        <AuthInput
          style={styles.textInputStyle}
          placeholderText="Repeat password"
          placeholderColor="lightgrey"
          autocorrect={ false }
          onChangeText={ this.onPwd2Changed }
          value={ this.props.gs_pwd2 }
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
    justifyContent: 'center',
    alignItems: 'center',
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
<View style={{position: 'absolute', top: 25, left: 10}}>
  <BackButton onPress={this.onBackButtonPress} />
</View>

onBackButtonPress = () => {
  this.props.navigation.navigate('welcome');
}
*/
