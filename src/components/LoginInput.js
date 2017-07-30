import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class LoginInput extends Component {
    render() {
        const { icon, placeholder, onChangeText, isPassword } = this.props;
        return (
            <View style={styles.inputWrapper}>
                <Icon style={styles.icon} name={icon} size={22} color="#FF0B7B" />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword}
                    placeholderTextColor="#808080"
                    underlineColorAndroid="transparent" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 5,
        marginBottom: 5,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#808080',
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 10
    }
});
