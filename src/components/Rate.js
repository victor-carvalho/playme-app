import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TouchableIcon({ onPress, ...props }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Icon {...props} />
        </TouchableWithoutFeedback>
    );
}

function generateStars(value, onPress) {
    let components = [];
    for (let i = 1; i <= 5; i++) {
        components.push(
            <TouchableIcon
                key={i}
                size={22}
                onPress={() => onPress(i)}
                style={i <= value ? styles.starChecked : styles.star}
                name={i <= value ? "star" : "star-outline"} />
        );
    }
    return components;
}

export default class VolumeSlider extends Component {
    state = {
        rate: 0
    }

    onStarClick = value => {
        this.setState(({rate}) => {
            return { rate: (value === rate) ? (value - 1) : value };
        });
    }

    render() {
        const { max } = this.props;

        return (
            <View style={styles.container}>
                {generateStars(this.state.rate, this.onStarClick)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    starChecked: {
        color: '#FF1A43'
    }
});