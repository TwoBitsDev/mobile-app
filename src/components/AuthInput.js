/* @flow weak */

import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

// <TextInput placeholder={placeholderText} />
/*
<View style={{margin: 5}}>
  <Image source={imageSource} />
</View>
*/
const AuthInput = (props) => {
  const {
    imageSource,
    placeholderText,
    placeholderColor,
    autoCorrect,
    onChangeText,
    value,
    secureTextEntry,
    onFocus,
  } = props;

  return (

    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={placeholderColor}
          autoCorrect={false}
          onChangeText={onChangeText}
          onFocus={onFocus}
          value={value}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          style={[{ height: 30, fontSize: 20 }, props.style]}
          underlineColorAndroid='transparent'
        />
      </View>

    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
