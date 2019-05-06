import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBqa3kZFcoKULuBWTK07qJGD64cqfI81nQ",
            authDomain: "auth-38f33.firebaseapp.com",
            databaseURL: "https://auth-38f33.firebaseio.com",
            projectId: "auth-38f33",
            storageBucket: "auth-38f33.appspot.com",
            messagingSenderId: "543300136354",
            appId: "1:543300136354:web:16670fb6311934f4"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm>

                </LoginForm>
            </View>
        );

    }
}

export default App;