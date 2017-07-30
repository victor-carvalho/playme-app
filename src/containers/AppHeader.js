import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from 'react-native-searchbar';
import IconButton from '../components/IconButton';
import { search } from '../actions';

class AppHeader extends Component {
    onMenuPress = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

    onSearchPress = () => {
        this.search.show();
    }

    onSearch = searchText => {
        this.props.dispatch(search(searchText));
    }

    onHide = () => {
        this.props.dispatch(search(""));
    }

    render() {
        const { navigation } = this.props;
        const { routeName } = navigation.state;
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <IconButton name="menu" onPress={this.onMenuPress} />
                    <Text style={styles.headerTextStyle}>{routeName}</Text>
                    <IconButton name="magnify" onPress={this.onSearchPress} />
                </View>
                <SearchBar
                    onHide={this.onHide}
                    handleSearch={this.onSearch}
                    ref={component => this.search = component} />
            </View>
        );
    }
}

const Wrapper = connect()(AppHeader);

const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row'
    },
    headerTextStyle: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#000000'
    }
});

export default (props) => <Wrapper {...props} />;