import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerItems } from 'react-navigation';

const image = require('../../img/playme.png');

export default class SideMenu extends Component {
    render() {
        return (
            <LinearGradient colors={['#FF1A43', '#FF0B7B']} style={styles.container}>
                <Image source={image} style={styles.logo}/>
                <DrawerItems {...this.props} />
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    logo: {
        height: 120,
        width: 120,
        marginTop: 20
    }
});
