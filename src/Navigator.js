import { createStackNavigator } from "react-navigation";
import { HomeScreen, LoginScreen } from './screens'
import routes from './routes.json'
const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;
console.log(routes)
const appScreens = {
    [routes.login]: {
        screen: LoginScreen
    },
    [routes.home]: {
        screen: HomeScreen
    }
}

const configuration = {
    initialRouteName: routes.home,
    persistenceKey: navigationPersistenceKey
}

const AppNavigator = createStackNavigator(appScreens, configuration);;
export default AppNavigator;