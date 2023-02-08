import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Thongbao from './src/screen/ThongBaoScreen/ThongBaoScreen';
import LichLam from './src/screen/LichLamViecScreen/LichLamViec';
AppRegistry.registerComponent(appName, () => App);
