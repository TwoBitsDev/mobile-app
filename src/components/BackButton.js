/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const BackButton = (props) => (
  <TouchableOpacity
    style={[props.style, {backgroundColor: 'rgba(0,0,0,0)'}]}
    onPress={props.onPress}
  >
    <Text style={{color: '#6A7EFC', fontSize: 20}}>
      Back
    </Text>
  </TouchableOpacity>
);

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
