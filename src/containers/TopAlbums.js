import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from './AppHeader';
import BigAlbumCard from '../components/BigAlbumCard';

class TopAlbums extends Component {
    static navigationOptions = {
        header: AppHeader
    }

    goToPlayer = album => () => {
        this.props.navigation.navigate('AlbumPlayer', { album });
    }

    renderItem = (item) => {
        return <BigAlbumCard key={item.key} album={item} onPress={this.goToPlayer(item)} />;
    }

    render() {
        const { albums, search } = this.props;
        let data = albums;
        if (search.length > 0)
            data = albums.filter(album => album.title.indexOf(search) >= 0);
        return (
            <LinearGradient colors={['#AAAAAA', '#FFFFFF']} style={styles.container}>
                <ScrollView>
                    <View style={styles.topAlbumsList}>
                        {data.map(this.renderItem)}
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    topAlbumsList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

function mapToProps({ albums, search }) {
    return { albums, search };
}

export default connect(mapToProps)(TopAlbums);