import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from 'react-native-slider';

export default class PlayerSlider extends Component {
    render() {
        return (
            <View style={styles.playerSliderContainer}>
                <Text style={styles.playerText}>0:00</Text>
                <Slider
                    mininumValue={0}
                    maximumValue={100}
                    disabled={true}
                    style={styles.playerSlider}
                    trackStyle={styles.playerTrack}
                    thumbStyle={styles.playerThumb}
                />
                <Text style={styles.playerText}>0:00</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerSliderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playerSlider: {
        flex: 1
    },
    playerText: {
        paddingHorizontal: 5,
        fontSize: 14,
        color: '#000000'
    },
    playerTrack: {
        height: 8,
        borderRadius: 0,
    },
    playerThumb: {
        width: 5,
        height: 15,
        borderRadius: 0,
        backgroundColor: '#FF4064',
    }
});
