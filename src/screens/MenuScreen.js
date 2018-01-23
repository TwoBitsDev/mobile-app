// RN Dependencies
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

// Components
import { Header, Button} from './../components/common';

const SECTIONS=[
  {
    title: 'First',
    content: 'Lorem ipsum...'
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...'
  }
]; //create dynamically loaded data here



export default class MenuScreen extends Component {

  static navigationOptions = {
    header: null,
  }

  renderItem(section) {
    return(
      <View>
        <Text> {section.content} </Text>
      </View>
    );
  }

  renderHeader(section) {
    return(
      <View>
         <View>{section.title}</View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Accordion
          sections={SECTIONS}
          renderHeader={this.renderHeader}
          renderContent={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
});
