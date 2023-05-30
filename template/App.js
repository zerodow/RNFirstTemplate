import * as React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppStack from './src/routes';

const App = () => {
  // React.useEffect(() => {
  //   checkForUpdate();
  // }, []);

  // const checkForUpdate = async () => {
  //   await updateNative();
  //   codePushCheckUpdate({
  //     codePushStatusDidChange: codePushStatusChange,
  //     downloadProgressCallback: downloadProgressCallback,
  //   });
  // };

  // const codePushStatusChange = syncStatus => {
  //   switch (syncStatus) {
  //     case CodePushSyncStatus.CHECKING_FOR_UPDATE:
  //       console.log('Checking for update');
  //       break;
  //     case CodePushSyncStatus.DOWNLOADING_PACKAGE:
  //       console.log('Downloading package');
  //       break;
  //     case CodePushSyncStatus.AWAITING_USER_ACTION:
  //       console.log('Awaiting user action');
  //       break;
  //     case CodePushSyncStatus.INSTALLING_UPDATE:
  //       console.log('Installing update');
  //       break;
  //     case CodePushSyncStatus.UP_TO_DATE:
  //       console.log('App up to date.');
  //       onLoadConfigData();
  //       break;
  //     case CodePushSyncStatus.UPDATE_IGNORED:
  //       console.log('Update cancelled by user.');
  //       //   onLoadConfigData();
  //       break;
  //     case CodePushSyncStatus.UNKNOWN_ERROR:
  //       console.log('An unknown error occurred.');
  //       //   onLoadConfigData();
  //       break;
  //     case CodePushSyncStatus.UPDATE_INSTALLED:
  //       console.log('Update installed and will be applied on restart.');
  //       codePushAllowRestart();
  //       break;
  //     default:
  //       onLoadConfigData();
  //       break;
  //   }
  // };

  // const downloadProgressCallback = () => {};

  // const onLoadConfigData = () => {
  //   //load config
  // };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
