import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AlbumList from '../components/AlbumList';
import AppHeader from './AppHeader';

class Albums extends Component {
    static navigationOptions = {
        header: AppHeader
    }

    render() {
        const { albums, search } = this.props;
        let data = albums;
        if (search.length > 0)
            data = albums.filter(album => album.title.indexOf(search) >= 0);
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <AlbumList
                    albums={data}
                    navigation={this.props.navigation} />
            </View>
        );
    }
}

function mapToProps({ albums, search }) {
    return { albums, search };
}

export default connect(mapToProps)(Albums);