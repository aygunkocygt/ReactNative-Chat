import React from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import App from './src/App';
import Login from './src/screen/Login';

const firebaseConfig = {
	 apiKey: "AIzaSyB9A-oDRPztoUGOY6qeD34NIz04KIuj1yY",
	 databaseURL: "https://reactchat-ffbbd.firebaseio.com"

};
firebase.initializeApp(firebaseConfig);

const RouteConfigs = {
Login: { screen: Login },
Home: { screen: App }
};
const StackNavigatorConfig = {
	headerMode: 'none'
};

const SimpleApp = StackNavigator(RouteConfigs, StackNavigatorConfig);

AppRegistry.registerComponent('ReactChat', () => SimpleApp);
