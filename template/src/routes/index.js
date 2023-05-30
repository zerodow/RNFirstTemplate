import {View, Text, StatusBar, Platform} from 'react-native';
import React, {useMemo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {shallowEqual, useSelector} from 'react-redux';
import {APP_THEME} from '../utilities/constants';
import {isIOS} from '../utilities/layout';
import {NavigationContainer} from '@react-navigation/native';
import DarkTheme from '../assets/themes/DarkTheme';
import LightTheme from '../assets/themes/LightTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './MainStack';
import RouteName from './RouteName';
import UpdateLoading from '../components/UpdateLoading';

let refUpdateCpn;

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {appTheme, language} = useSelector(
    state => state.AppReducer,
    shallowEqual,
  );

  const statusBarStyle = useMemo(() => {
    switch (appTheme) {
      case APP_THEME.DARK:
        if (isIOS) {
          return 'light-content';
        }
        return 'dark-content';
      default:
        if (isIOS) {
          return 'dark-content';
        }
        return 'light-content';
    }
  }, [appTheme]);

  const myTheme = useMemo(() => {
    switch (appTheme) {
      case APP_THEME.DARK:
        return DarkTheme;
      default:
        return LightTheme;
    }
  }, [appTheme]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={RouteName.SPLASH}>
          {MainStack.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
      <UpdateLoading
        ref={r => {
          refUpdateCpn = r;
        }}
      />
    </SafeAreaProvider>
  );
};

export {refUpdateCpn};

export default AppStack;
