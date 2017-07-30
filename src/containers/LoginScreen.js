import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { login, signup, changeForm } from '../actions';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        padding: 50,
    },
    headerImage: {
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    fill: {
        flex: 1
    },
    changeForm: {
        padding: 30
    },
    changeFormText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

const header = (
    <View style={styles.header}>
        <Image source={require('../../img/logo.png')} resizeMode="contain" style={styles.headerImage} />
    </View>
);

class LoginScreen extends Component {
    onLogin = (username, password) => {
        this.props.login(username, password);
    }

    onSignup = (username, password) => {
        this.props.signup(username, password);
    }

    changeForm = () => {
        this.props.changeForm();
    }

    render() {
        const { isSignup, failed, logged } = this.props;
        return (
            <View style={styles.fill}>
                <StatusBar
                    backgroundColor="#FF1A43"
                    barStyle="light-content"
                />
                <LinearGradient colors={['#FF1A43', '#FF0B7B']} style={styles.container}>
                    <KeyboardAvoidingView behavior="position" style={styles.fill}>
                        {header}
                        {isSignup
                            ? <SignupForm onSignup={this.onSignup} />
                            : <LoginForm onLogin={this.onLogin} />}
                    </KeyboardAvoidingView>
                    <TouchableOpacity onPress={this.changeForm}>
                        <View style={styles.changeForm}>
                            <Text style={styles.changeFormText}>
                                {isSignup ? 'Cancel' : 'Sign Up'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

function mapToProps({ loginData }) {
    return { ...loginData };
}

function mapDispatch(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password)),
        signup: (username, password) => dispatch(signup(username, password)),
        changeForm: () => dispatch(changeForm())
    };
}

export default connect(mapToProps, mapDispatch)(LoginScreen);
