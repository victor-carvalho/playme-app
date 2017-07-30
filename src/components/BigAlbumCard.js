import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default class BigAlbumCard extends Component {
    render() {
        const { title, band, img } = this.props.album;
        return (
            <TouchableOpacity style={styles.bigAlbumCardContainer} onPress={this.props.onPress}>
                <View>
                    <Image style={styles.image} source={img} />
                    <View style={styles.infoWrapper}>
                        <Text 
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.albumName}>{title}</Text>
                        <Text 
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.bandName}>{band}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const cardWidth = (width - 30) / 2;

const styles = StyleSheet.create({
    bigAlbumCardContainer: {
        height: cardWidth + 50,
        width: cardWidth,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FFFFFF',
        elevation: 2
    },
    bigAlbumCard: {
        flexDirection: 'column',
        height: cardWidth + 50,
        width: cardWidth,
    },
    image: {
        height: cardWidth,
        width: cardWidth,
        resizeMode: 'contain'
    },
    infoWrapper: {
        padding: 5
    },
    albumName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#404040'
    },
    bandName: {
        fontSize: 13,
        color: '#404040'
    }
});
