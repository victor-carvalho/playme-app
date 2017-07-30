import { combineReducers } from 'redux';
import bands from './bands';
import albums from './albums';
import search from './search';
import playlist from './playlist';
import loginData from './loginData';

export default combineReducers({ albums, bands, loginData, playlist, search });
