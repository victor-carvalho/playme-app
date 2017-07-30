import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import BandList from '../containers/BandList';
import BandDetails from '../components/BandDetails';
import AlbumPlayer from '../components/AlbumPlayer';

export default StackNavigator({
    BandList: { screen: BandList },
    BandDetails: { screen: BandDetails },
    AlbumPlayer: { screen: AlbumPlayer },
}, {
    transitionConfig: () => {
        return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
    }
});
