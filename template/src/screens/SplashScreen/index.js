import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {icons} from '../../assets';
import {deviceHeight, deviceWidth} from '../../utilities/layout';

const SplashScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="stretch"
        source={icons.wallPaper}
        style={{width: deviceWidth, height: deviceHeight}}
      />
    </View>
  );
};

export default SplashScreen;
