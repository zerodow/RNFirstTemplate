import {Alert} from 'react-native';

const delay = value => {
  return new Promise(resolve => {
    const t = setTimeout(() => {
      clearTimeout(t);
      resolve();
    }, value);
  });
};

const hitSlop = val => ({
  top: val,
  bottom: val,
  left: val,
  right: val,
});

const showAlert = ({title, description, confirmTitle, cancelTitle}) => {
  return new Promise((resolve, reject) => {
    // Alert.alert(title || I18n.t('noti'), description, [
    //   {
    //     text: confirmTitle || I18n.t('ok'),
    //     onPress: () => resolve(true),
    //   },
    //   {
    //     text: cancelTitle || I18n.t('cancel'),
    //     onPress: () => reject(false),
    //   },
    // ]);
  });
};

export {delay, hitSlop, showAlert};
