import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class LoginCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            checked: props.defaultValue || false
        }
    }

    notify = () => {
        this.props.onChange(this.state.checked);
    }

    onPress = () => {
        this.setState(state => {
            return { checked: !state.checked };
        }, this.notify);
    }

    render() {
        const { label } = this.props;
        const { checked } = this.state;
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={styles.checkboxWrapper}>
                    <Icon name={`checkbox-${checked ? 'marked' : 'blank'}`} size={22} color="#000000"/>
                    <Text style={styles.checkboxLabel}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkboxLabel: {
        marginLeft: 5, 
        color: '#FFFFFF'
    }
});