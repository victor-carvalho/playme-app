import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class BandDetails extends Component {
    renderMiniAlbumCard = album => {
        return (
            <TouchableOpacity
                key={album.key} 
                onPress={() => this.props.navigation.navigate('AlbumPlayer', { album })}>
                <Image source={album.img} style={styles.albumImage} />
            </TouchableOpacity>
        );
    }
    
    render() {
        const { navigation } = this.props;
        const { band } = navigation.state.params;


        return (
            <ScrollView>
                <Image source={band.img} style={styles.image} />
                <View style={styles.bandContainer}>
                    <Text style={styles.bandName}>{band.name}</Text>
                    <Text style={styles.bandDescription}>
                        {band.description}
                    </Text>
                    <Text style={styles.albumHeader}>Álbums</Text>
                    <View style={styles.albumList}>
                        {band.albums.map(this.renderMiniAlbumCard)}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const imageWidth = (width - 50) / 3;

const styles = StyleSheet.create({
    bandContainer: {
        padding: 10
    },
    image: {
        height: 300,
        width
    },
    bandName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 5,
        marginBottom: 5,
    },
    bandDescription: {
        color: '#000000',
        textAlign: 'left',
    },
    albumHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 5,
        marginBottom: 5,
    },
    albumList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    albumImage: {
        height: imageWidth,
        width: imageWidth,
        margin: 5
    }
});