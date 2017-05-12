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