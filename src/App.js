import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD4lK8dhpY35bWMDW5OKj3tWMgkN03T7D0",
    authDomain: "react-native-sample-66b63.firebaseapp.com",
    databaseURL: "https://react-native-sample-66b63.firebaseio.com",
    projectId: "react-native-sample-66b63",
    storageBucket: "react-native-sample-66b63.appspot.com",
    messagingSenderId: "619363307946"
  };
  firebase.initializeApp(config);
  }

  render() {
    // adding redux thunk middleware and creating store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;