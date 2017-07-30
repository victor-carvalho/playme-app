import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import TopAlbums from '../containers/TopAlbums';
import AlbumPlayer from '../components/AlbumPlayer';

export default StackNavigator({
    TopAlbums: { screen: TopAlbums },
    AlbumPlayer: { screen: AlbumPlayer },
}, {
    transitionConfig: () => {
        return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
    }
});
