import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rate from './Rate';
import PlayerSlider from './PlayerSlider';
import VolumeSlider from './VolumeSlider';

const { width } = Dimensions.get('window');

export default class AlbumPlayer extends Component {
    render() {
        const { navigation } = this.props;
        const { album } = navigation.state.params;
        return (
            <View>
                <Image source={album.img} style={styles.image} />
                <View style={styles.playerContainer}>
                    <PlayerSlider />
                    <Text style={styles.albumName}>{album.title}</Text>
                    <Text style={styles.bandName}>{album.band}</Text>
                    <Rate />
                    <View style={styles.playerButtons}>
                        <Icon name="rewind" size={35} color="#000000" style={styles.button} />
                        <Icon name="play" size={35} color="#000000" style={styles.button} />
                        <Icon name="fast-forward" size={35} color="#000000" style={styles.button} />
                    </View>
                    <VolumeSlider />
                </View>
            </View>
        );
    }
}

const imageWidth = (width - 50) / 3;

const styles = StyleSheet.create({
    playerContainer: {
        padding: 5
    },
    image: {
        height: width, width
    },
    albumName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },
    bandName: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000000'
    },
    playerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginLeft: 25,
        marginRight: 25
    }
});