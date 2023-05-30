import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = ({key, migrate, whitelist}) => ({
  key,
  version: 1,
  storage: AsyncStorage,
  timeout: 0,
  migrate,
  whitelist,
});

export default persistConfig;
