import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './src/router';
import {
  codePushAllowRestart,
  codePushCheckUpdate,
  CodePushSyncStatus,
  updateNative,
} from './src/utilities/helper/updateHelper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = async () => {
    await updateNative();
    codePushCheckUpdate({
      codePushStatusDidChange: codePushStatusChange,
      downloadProgressCallback: downloadProgressCallback,
    });
  };

  const codePushStatusChange = syncStatus => {
    switch (syncStatus) {
      case CodePushSyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update');
        break;
      case CodePushSyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package');
        break;
      case CodePushSyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action');
        break;
      case CodePushSyncStatus.INSTALLING_UPDATE:
        console.log('Installing update');
        break;
      case CodePushSyncStatus.UP_TO_DATE:
        console.log('App up to date.');
        onLoadConfigData();
        break;
      case CodePushSyncStatus.UPDATE_IGNORED:
        console.log('Update cancelled by user.');
        //   onLoadConfigData();
        break;
      case CodePushSyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        //   onLoadConfigData();
        break;
      case CodePushSyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        codePushAllowRestart();
        break;
      default:
        onLoadConfigData();
        break;
    }
  };

  const downloadProgressCallback = () => {};

  const onLoadConfigData = () => {
    //load config
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          {MainStack.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
