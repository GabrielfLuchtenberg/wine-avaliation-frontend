import { createStackNavigator } from "react-navigation";
import { HomeScreen, LoginScreen, DetailsScreen } from './screens'
import routes from './routes.json'

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const appScreens = {
    [routes.login]: {
        screen: LoginScreen
    },
    [routes.home]: {
        screen: HomeScreen
    },
    [routes.details]: {
        screen: DetailsScreen
    }
}

const configuration = {
    initialRouteName: routes.details,
    persistenceKey: navigationPersistenceKey,
    cardStyle: {
        backgroundColor: '#464646'
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#2d2d2d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
}

const AppNavigator = createStackNavigator(appScreens, configuration);
export default AppNavigator;