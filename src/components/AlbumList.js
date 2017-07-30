import React, { Component } from 'react';
import { FlatList } from 'react-native';
import AlbumCard from '../components/AlbumCard';

export default class AlbumList extends Component {
    goToPlayer = album => () => {
        this.props.navigation.navigate('AlbumPlayer', { album });
    }

    renderItem = ({ item }) => {
        return <AlbumCard album={item} onPress={this.goToPlayer(item)} />;
    }

    render() {
        return (
            <FlatList 
                data={this.props.albums}
                renderItem={this.renderItem}
            />
        );
    }
}
