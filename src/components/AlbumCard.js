import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function intToTime(number) {
    let hours = Math.floor(number / 60);
    let minutes = number % 60;
    return `${hours}:${minutes}`;
}

export default class AlbumCard extends Component {
    render() {
        const { title, img, duration } = this.props.album;
        return (
            <TouchableOpacity style={styles.albumCard} onPress={this.props.onPress}>
                <Image source={img} style={styles.image} />
                <Text style={styles.albumName}>{title}</Text>
                <Text style={styles.albumDuration}>{intToTime(duration)}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    albumCard: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        padding: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: "contain"
    },
    albumName: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        color: '#000000'
    },
    albumDuration: {
        fontSize: 18,
        color: '#AAAAAA'
    }
});
