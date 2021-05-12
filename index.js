/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import config from './src/config';
import DB from './src/DB';

AppRegistry.registerComponent(appName, () => config);
