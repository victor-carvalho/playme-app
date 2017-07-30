import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import AlbumList from '../components/AlbumList';
import AppHeader from './AppHeader';

const { width } = Dimensions.get('window');

function intToTime(number) {
    let hours = Math.floor(number / 60);
    let minutes = number % 60;
    if (hours > 0)
        return `${hours}h ${minutes}m`;
    else
        return `${minutes}m`;
}

class PlayList extends Component {
    static navigationOptions = {
        header: AppHeader
    }

    render() {
        let { img, title, duration, albums } = this.props.playlist;
        let search = this.props.search;
        let data = albums;
        if (search.length > 0)
            data = albums.filter(album => album.title.indexOf(search) >= 0);
        return (
            <View style={styles.container}>
                <Image source={img} style={styles.image}>
                    <Text style={styles.playlistName}>{title}</Text>
                    <Text style={styles.playlistDuration}>
                        Playlist Duration {intToTime(duration)}
                    </Text>
                </Image>
                <AlbumList
                    albums={data}
                    navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 150,
        width,
        paddingLeft: 25,
        justifyContent: 'center',
        resizeMode: 'stretch'
    },
    playlistName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    playlistDuration: {
        fontSize: 16,
        color: '#FFFFFF'
    }
});

function mapToProps({ playlist, search }) {
    return { playlist, search };
}

export default connect(mapToProps)(PlayList);