import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {messageApp, networkError} from '../utiliti/Style/Message';

export const AuthContext = createContext();
export const AuthProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [splashLoading, setSplashLoading] = useState(false);
  const {children,navigation} = props;
  // const {navigation} = props;
  //handle login
  const login = async (email, password,navigation) => {
    setIsLoading(true);
    axios.post("https://nhutthang-jupviec-nodejs.onrender.com/api/login-staff", {
        email,
        password,
      })
      .then(res => {
        console.log(res.data.message)
        const result = res.data.message;
        if (result == 'OK') {
          Alert.alert('Thông báo', 'Đăng nhập thành công');
          navigation.navigate("HomeDrawer")

        }else {
          Alert.alert('Thông báo', 'Đăng nhập thất bại');
        }
        
      })
      .catch(res => {
        if (res.message === 'Network Error') {
          Alert.alert(messageApp, networkError);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //handle logout
  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo').then(r => console.log(r));
    setUserInfo({});
    setIsLoading(false);
  };

  // handle check login
  useEffect(() => {
    //check login user
    const isLoggedIn = async () => {
      try {
        setSplashLoading(true);
        let userInfo = await AsyncStorage.getItem('userInfo');
        userInfo = JSON.parse(userInfo);
        if (userInfo) {
          setUserInfo(userInfo);
        }
        setSplashLoading(false);
      } catch (err) {
        setSplashLoading(false);
        console.log(err);
      }
    };
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        logout,
        splashLoading,
        
      }}>
      {children}
    </AuthContext.Provider>
  );
};