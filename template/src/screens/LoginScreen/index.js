import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {loginApi} from '../../api/auth';
import {loginSchema} from '../../api/schema/authSchema';
import {useDispatch, useSelector} from 'react-redux';
import md5 from 'md5';
import {setAccessToken, setUserInfo} from '../../store/auth';
import {refUpdateCpn} from '../../routes';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.AppReducer.language);

  const _onPress = async () => {
    // const params = loginSchema({
    //   username: '0989530230',
    //   password: md5('123456'),
    //   locale: language,
    //   typeUser: 4,
    // });
    // const res = await loginApi(params);
    // console.log('res', res);
    // dispatch(
    //   setUserInfo({
    //     data: res.data.data,
    //   }),
    // );
    // dispatch(
    //   setAccessToken({
    //     token: res.data.data.access_token,
    //   }),
    // );
    // navigation.replace('Main');
    refUpdateCpn?.show();
  };

  const onAutoLogin = () => {};

  const loginAction = () => {};

  return (
    <SafeView>
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <TouchableOpacity style={styles.btn} onPress={_onPress}>
          <Text>TO LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
});
