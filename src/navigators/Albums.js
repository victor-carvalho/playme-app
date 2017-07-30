import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Albums from '../containers/Albums';
import AlbumPlayer from '../components/AlbumPlayer';

export default StackNavigator({
    Albums: { screen: Albums },
    AlbumPlayer: { screen: AlbumPlayer },
}, {
    transitionConfig: () => {
        return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
    }
});
