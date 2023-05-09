import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';

const LoginScreen = ({navigation}) => {
  const _onPress = () => {
    navigation.replace('Main');
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
