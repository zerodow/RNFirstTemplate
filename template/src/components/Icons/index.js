import React from 'react';
import {Image, View} from 'react-native';
import {defaultColors} from '../../utilities/constants';
import TouchableDebounce from '../../components/TouchableDebounce';
import {SvgXml} from 'react-native-svg';

const Icon = ({
  width = 24,
  height = 24,
  color = defaultColors.icon, // update 'fill' field in svg file to 'currentColor' to get effect
  style,
  source,
  size = 24,
  onPress,
  hitSlop,
  isImage = false,
}) => {
  if (!source) {
    return null;
  }
  return (
    <TouchableDebounce
      hitSlop={hitSlop}
      disabled={!onPress}
      onPress={onPress}
      style={style}>
      {isImage ? (
        <Image source={source} style={{width, height, color}} />
      ) : (
        <View style={{width, height}}>
          <SvgXml xml={source} width="100%" height="100%" />
        </View>
      )}
    </TouchableDebounce>
  );
};
export default Icon;
