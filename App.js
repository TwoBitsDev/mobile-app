// RN Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

// Action Creators || Reducers
import reducers from './src/reducers';

//Components
import WelcomeScreen from './src/screens/WelcomeScreen';
import MenuScreen from './src/screens/MenuScreen';

export default class App extends React.Component {
  render() {

    const MainNavigator = StackNavigator(
      {
        welcome: { screen: WelcomeScreen },
        menu: { screen: MenuScreen }, // switch order for default loading for your project
      },
      {
        lazy: true,
      }
    );

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
