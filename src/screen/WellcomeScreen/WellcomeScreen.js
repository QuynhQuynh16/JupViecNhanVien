import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
import React from 'react';

  
const WelComeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white',
  
      }}>
        <>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={require('../../assets/img/logoJupViec.png')}
                style={{width: 300, height: 100 , marginTop:100}}
                //resizeMode={'center'}
              />
            </View>
           
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#007aff',
                  fontWeight: '400',
                  marginVertical: 4,
                }}>
                Ứng dụng dành cho
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: '#007aff',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                }}>
                Nhân Viên Giúp Việc
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 180,
              }}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 24,
                  marginVertical: 4,
                  backgroundColor: '#007aff',
                }}
                onPress={()=>{
                  navigation.navigate('Login');

                }}
                >
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: '800',
                  }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#8ec541',
                  width: '90%',
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 24,
                  marginVertical: 4,
                }}
                onPress={()=>{
                  navigation.navigate('Register');

                }}
                >
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                  }}>
                  Tạo tài khoản
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </SafeAreaView>
    );
  };
  
  export default React.memo(WelComeScreen);
  