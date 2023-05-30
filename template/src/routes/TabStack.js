import TabAccount from '../screens/TabAccount';
import TabHome from '../screens/TabHome';
import TabNews from '../screens/TabNews';
import TabNoti from '../screens/TabNoti';
import TabReport from '../screens/TabReport';
import RouteName from './RouteName';

export const TabStack = [
  {
    name: RouteName.TAB_REPORT,
    component: TabReport,
  },
  {
    name: RouteName.TAB_NEWS,
    component: TabNews,
  },
  {
    name: RouteName.TAB_HOME,
    component: TabHome,
  },
  {
    name: RouteName.TAB_NOTI,
    component: TabNoti,
  },
  {
    name: RouteName.TAB_ACCOUNT,
    component: TabAccount,
  },
];
