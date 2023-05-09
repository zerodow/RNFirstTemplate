import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import TabHome from './screens/TabHome';
import TabHistory from './screens/TabHistory';
import TabAccount from './screens/TabAccount';

export const MainStack = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
];

export const TabStack = [
  {
    name: 'TabHome',
    component: TabHome,
  },
  {
    name: 'TabHistory',
    component: TabHistory,
  },
  {
    name: 'TabAccount',
    component: TabAccount,
  },
];
