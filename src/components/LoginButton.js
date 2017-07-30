import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

export default class LoginButton extends Component {
    render() {
        const { title, onPress } = this.props;
        return (
            <TouchableHighlight style={styles.touchableWrapper} onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonContent}>{title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    touchableWrapper: {
        marginTop: 5,
        marginBottom: 5,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    button: {
        flex: 1
    },
    buttonContent: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 14
    }
});
