import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class BandCard extends Component {
    render() {
        const { name, img, albums } = this.props.band;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image source={img} style={styles.imageContainer}>
                    <View>
                        <Text style={styles.bandName}>{name}</Text>
                        <Text style={styles.bandInfo}>{albums.length} Álbums</Text>
                    </View>
                </Image>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 150,
        width,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10
    },
    bandName: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    bandInfo: {
        fontSize: 18,
        color: '#FFFFFF'
    }
});
