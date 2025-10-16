import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainStack from './src/navigator/MainStack';
import { Provider } from 'react-redux';
import store from './src/component/Redux/App/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtext: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
});

export default App;
