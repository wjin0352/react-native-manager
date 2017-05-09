import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAsDtmDoIL-cPYgxTtq4OB-DBanBw7D7Vw',
      authDomain: 'manager-7996b.firebaseapp.com',
      databaseURL: 'https://manager-7996b.firebaseio.com',
      projectId: 'manager-7996b',
      storageBucket: 'manager-7996b.appspot.com',
      messagingSenderId: '37145095904'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
        <LoginForm/>
      </View>
      </Provider>
    );
  }
}

export default App;