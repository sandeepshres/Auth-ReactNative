import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Header, Button, Spinner } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    state = { loggedIn: null };
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

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );

    }
}

export default App;