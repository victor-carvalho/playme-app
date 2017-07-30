import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Albums from './Albums';
import BandList from './Bands';
import PlayList from './Playlists';
import TopAlbums from './TopAlbums';
import SideMenu from '../components/SideMenu';

const MainMenu = DrawerNavigator({
    'Top Albums': { screen: TopAlbums },
    'Bands': { screen: BandList },
    'Albums': { screen: Albums },
    'PlayLists': { screen: PlayList },
}, {
    drawerWidth: 270,
    backBehavior: 'none',
    contentComponent: SideMenu,
    contentOptions: {
        labelStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: 'normal',
            color: '#FFFFFF',
            paddingBottom: 20,
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: StyleSheet.hairlineWidth
        }
    }
});

export default MainMenu;
