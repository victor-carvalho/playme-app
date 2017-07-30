import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class IconButton extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Icon name={this.props.name} size={30} color="#000000" style={styles.icon} />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        paddingHorizontal: 10
    }
});
