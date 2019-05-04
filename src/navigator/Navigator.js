import { createStackNavigator } from "react-navigation";
import HomeNavScreen from "./Home";
import DetailsNavScreen from "./Details";
import LoginNavScreen from "./Login";
import routes from "./routes.json";

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const appScreens = {
  [routes.login]: {
    screen: LoginNavScreen
  },
  [routes.home]: {
    screen: HomeNavScreen
  },
  [routes.details]: {
    screen: DetailsNavScreen
  }
};

const configuration = {
  initialRouteName: routes.login,
  persistenceKey: navigationPersistenceKey,
  cardStyle: {
    backgroundColor: "#464646"
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#2d2d2d"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};

const AppNavigator = createStackNavigator(appScreens, configuration);
export default AppNavigator;
