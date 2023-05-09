import {View, Text} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderTab from '../../components/HeaderTab';

const TabHome = () => {
  return (
    <SafeView>
      <HeaderTab title={'Home'} />
      <View />
    </SafeView>
  );
};

export default TabHome;
