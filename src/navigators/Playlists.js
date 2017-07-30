import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import PlayList from '../containers/PlayList';
import AlbumPlayer from '../components/AlbumPlayer';

export default StackNavigator({
    PlayList: { screen: PlayList },
    AlbumPlayer: { screen: AlbumPlayer },
}, {
    transitionConfig: () => {
        return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
    }
});
