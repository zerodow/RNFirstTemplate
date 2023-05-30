import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderTab from '../../components/HeaderTab';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {changeLang, changeTheme} from '../../store/app';
import {APP_LANGUAGE, APP_THEME} from '../../utilities/constants';
import {useTheme} from '@react-navigation/native';
import SVG from '../../assets/icons/svgSource';
import Icon from '../../components/Icons';
import {useTranslation} from 'react-i18next';
import i18n from '../../assets/I18n';

const TabHome = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  const {appTheme, language} = useSelector(
    state => state.AppReducer,
    shallowEqual,
  );

  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(
      changeTheme({
        theme: appTheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK,
      }),
    );
  };

  const onChangeLang = () => {
    const nextLang =
      language === APP_LANGUAGE.VI ? APP_LANGUAGE.EN : APP_LANGUAGE.VI;
    i18n.changeLanguage(nextLang);
    dispatch(
      changeLang({
        lang: nextLang,
      }),
    );
  };

  return (
    <SafeView>
      <HeaderTab title={'Home'} />
      <View style={styles.container}>
        <Icon source={SVG.star} />
        <TouchableOpacity style={styles.btn1} onPress={onChangeTheme}>
          <Text>{t('hello')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={onChangeLang}>
          <Text>change lang</Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
};

export default TabHome;

const makeStyles = colors => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    btn1: {
      width: 100,
      height: 50,
      backgroundColor: colors.btn1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn2: {
      width: 100,
      height: 50,
      backgroundColor: colors.btn2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
