import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList197491Navigator from '../features/NotificationList197491/navigator';
import Settings197490Navigator from '../features/Settings197490/navigator';
import Settings197482Navigator from '../features/Settings197482/navigator';
import UserProfile197480Navigator from '../features/UserProfile197480/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList197491: { screen: NotificationList197491Navigator },
Settings197490: { screen: Settings197490Navigator },
Settings197482: { screen: Settings197482Navigator },
UserProfile197480: { screen: UserProfile197480Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
