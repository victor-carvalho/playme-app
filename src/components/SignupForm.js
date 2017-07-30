import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';

export default class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        confirmation: ''
    }

    onChangeUsername = username => {
        this.setState({ username });
    }

    onChangePassword = password => {
        this.setState({ password });
    }
    
    onChangeConfirm = confirmation => {
        this.setState({ confirmation });
    }

    onPress = () => {
        let { username, password, confirmation } = this.state;
        if (password == confirmation)
            this.props.onSignup(username, password);
    }

    render() {
        return (
            <View style={styles.signupForm}>
                <LoginInput
                    isPassword={false}
                    icon="account-outline"
                    placeholder="Username"
                    onChangeText={this.onChangeUsername} />
                <LoginInput
                    isPassword={true}
                    icon="key-variant"
                    placeholder="Password"
                    onChangeText={this.onChangePassword} />
                <LoginInput
                    isPassword={true}
                    icon="key-variant"
                    placeholder="Confirm Password"
                    onChangeText={this.onChangeConfirm} />
                <LoginButton title="Save" onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   signupForm: {
       padding: 30
   } 
});
