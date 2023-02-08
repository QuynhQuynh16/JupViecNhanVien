import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import WellcomeScreen from './src/screen/WellcomeScreen/WellcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen/RegisterScreen';
import KenhDoiSongNV from './src/screen/KenhDoiSongNV/KenhDoiSongNV';
import VideoGioiThieu from './src/screen/VideoGioiThieu/VideoGioiThieu';
import LichLamViecScreen from './src/screen/LichLamViecScreen/LichLamViec';
import ThongBaoScreen from './src/screen/ThongBaoScreen/ThongBaoScreen';
import DieuKienHopTacScreen from './src/screen/DieuKienHopTacScreen/DieuKienHopTacScreen';
import ThongTinCaNhan from './src/screen/ThongTinCaNhan/ThongTinCaNhan';
import LocationScreen from './src/screen/LocationScreen/LocationScreen';
import context from './src/context/AuthContext';

//const {userInfo, splashLoading} = context(AuthContext);
import {AuthProvider} from './src/context/AuthContext';

const App = () => {

  
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return(
      <Drawer.Navigator initialRouteName="LichLamViecScreen">
          
          <Drawer.Screen name="Lịch làm việc" component={LichLamViecScreen} />
          <Drawer.Screen name="Thông Báo" component={ThongBaoScreen} /> 
          <Drawer.Screen name="Kênh Đời Sống Nhân Viên" component={KenhDoiSongNV} />
          <Drawer.Screen name="Video Giới Thiệu" component={VideoGioiThieu} />
          <Drawer.Screen name="Thông Tin Cá Nhân" component={ThongTinCaNhan} />
          
            
      </Drawer.Navigator>

  );
}
////////////////////////////////////////////////////////////////////////////////////////////////

  return (

<NavigationContainer>

<Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WellCome" component={WellcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="DieuKienHopTacScreen" component={DieuKienHopTacScreen} />
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
  </Stack.Navigator>
</NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})