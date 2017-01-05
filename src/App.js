import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyAakTqngSR1yObc3_t-5UZWnR_qUvCfrIg',
		    authDomain: 'auth-2588f.firebaseapp.com',
		    databaseURL: 'https://auth-2588f.firebaseio.com',
		    storageBucket: 'auth-2588f.appspot.com',
		    messagingSenderId: '417551463811'
		 });
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;