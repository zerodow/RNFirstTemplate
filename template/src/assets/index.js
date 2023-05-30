import {Platform} from 'react-native';

import icUsers from './icons/icUsers.png';

const fonts = Platform.select({
  ios: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
  android: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
});

const icons = {
  icBackArrowWhite: require('./icons/icBackArrowWhite.png'),
  wallPaper: require('./icons/wallpaper.png'),
};

export {icUsers, fonts, icons};
