import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import MainMenu from '../navigators/MainMenu';
import SearchBar from 'react-native-searchbar';

class App extends Component {
    render() {
        if (this.props.logged) {
            return <MainMenu />;
        } else {
            return <LoginScreen />;
        }
    }
}

function mapToProps({ loginData: { logged } }) {
    return { logged };
}

export default connect(mapToProps)(App);
