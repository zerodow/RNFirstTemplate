import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../store/auth';

const TabAccount = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogout = () => {
    // dispatch(logoutAction());
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <Text>TabAccount</Text>
      <TouchableOpacity style={styles.btn} onPress={onLogout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
});
