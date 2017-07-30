import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';
import LoginCheckbox from '../components/LoginCheckbox';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        rememberMe: false
    }

    onChangeUsername = username => {
        this.setState({ username });
    }

    onChangePassword = password => {
        this.setState({ password });
    }

    onChangeRememberMe = rememberMe => {
        this.setState({ rememberMe });
    }

    onPress = () => {
        let { username, password } = this.state;
        this.props.onLogin(username, password);
    }

    render() {
        return (
            <View style={styles.loginForm}>
                <LoginInput
                    icon="account-outline"
                    placeholder="Username"
                    onChangeText={this.onChangeUsername} />
                <LoginInput
                    isPassword={true}
                    icon="key-variant"
                    placeholder="Password"
                    onChangeText={this.onChangePassword} />
                <LoginButton title="Login" onPress={this.onPress} />
                <LoginCheckbox
                    label="Remember Password"
                    onChange={this.onChangeRememberMe} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginForm: {
        padding: 30
    }
});