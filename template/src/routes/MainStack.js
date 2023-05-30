import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';
import RouteName from './RouteName';

export const MainStack = [
  {
    name: RouteName.SPLASH,
    component: SplashScreen,
  },
  {
    name: RouteName.LOGIN,
    component: LoginScreen,
  },
  {
    name: RouteName.MAIN,
    component: MainScreen,
  },
];
