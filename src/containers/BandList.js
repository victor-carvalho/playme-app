import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import BandCard from '../components/BandCard';
import AppHeader from './AppHeader';

class BandList extends Component {
    static navigationOptions = {
        header: AppHeader
    }

    goToDetails = band => () => {
        this.props.navigation.navigate('BandDetails', { band });
    }

    renderItem = ({ item }) => {
        return <BandCard band={item} onPress={this.goToDetails(item)} />;
    }

    render() {
        const { bands, search } = this.props;
        let data = bands;
        if (search.length > 0)
            data = bands.filter(band => band.name.indexOf(search) >= 0);
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem} />
            </View>
        );
    }
}

function mapToProps({ bands, search }) {
    return { bands, search };
}

export default connect(mapToProps)(BandList);