import { createStackNavigator } from "react-navigation";
import { HomeScreen, LoginScreen } from './screens'

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const configuration = {
    initialRouteName: "Login",
    persistenceKey: navigationPersistenceKey
}

const appScreens = {
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    }
}

const AppNavigator = createStackNavigator(appScreens, configuration);

export default AppNavigator;