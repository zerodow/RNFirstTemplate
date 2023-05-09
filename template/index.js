/**
 * @format
 */
import 'react-native-gesture-handler';
import {
  AppRegistry,
  Text,
  TextInput,
  LogBox,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs([
  'Warning: ...',
  'Non-serializable values were found in the navigation state',
]);

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

if (TouchableOpacity.defaultProps == null) TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.8;

AppRegistry.registerComponent(appName, () => App);
