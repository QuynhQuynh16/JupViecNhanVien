import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {
  MainColor,
  SecoundColor,
} from '../../utiliti/Style/style';
import {loginscreencss} from './LoginScreenCss';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import {widthWindow} from '../../utiliti/Style/reponsive';
import axios from 'axios';
import { messageApp, networkError } from '../../utiliti/Style/Message';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nhập đúng định dạng Email')
    .required('Vui lòng nhập Email'),

  password: Yup.string()
    .min(2, 'Mật khẩu quá ngắn')
    .max(20, 'Mật khẩu quá dài')
    .required('Vui lòng nhập mật khẩu'),
});

const LoginScreen = ({navigation}) => {
  
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const login =  (values) => {
    //navigation.navigate("HomeDrawer")
     axios.post("https://nhutthang-jupviec-nodejs.onrender.com/api/login-staff", {
       email:  values.email,
      passwrod:values.password,
      })
      .then(res => {
        console.log(res)
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
   
  };
  const DieuKien =()  => {
    navigation.navigate("DieuKienHopTacScreen")
  };

  const [eye, setEye] = useState(true);
  const handleSeteye = () => {
    setEye(!eye);
  };
  const handleGoback = () => {
    navigation.pop();
  };

  
  return (
    <SafeAreaView style={loginscreencss.contaner}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>

      


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View
              style={{
                width: '100%',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 5,
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      
                    }}>
                    <TouchableOpacity onPress={handleGoback}>
                      <Ionicons name="chevron-back-sharp" size={50} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: widthWindow * 0.15,
                }}>
                <Image
                  source={require('../../assets/img/logoJupViec.png')}
                  style={{
                    width: 300,
                    height: 100,
                    marginTop:10,
                    marginBottom:100
                  }}
                  //resizeMode={'center'}
                />
              </View>
            </View>

            {/* <SysModal/> */}


            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={login}
              
              >
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                dirty,
                setFieldTouched,
              }) => (
                <View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <View style={loginscreencss.MainCssInput}>
                      <TextInput
                        placeholder="Email"
                        style={loginscreencss.InputCss}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        value={values.email}
                        touched={touched.email}
                        keyboardType={'email-address'}
                      />
                    </View>
                    {errors.email && touched.email ? (
                      <Text
                        style={{
                          color: 'red',
                          paddingBottom: 5,
                          width: '100%',
                          paddingLeft: 8,
                        }}>
                        {errors.email}
                      </Text>
                    ) : null}
                    <View style={loginscreencss.MainCssInput}>
                      <TextInput
                        touched={touched.password}
                        placeholder="Mật khẩu"
                        style={loginscreencss.InputCss}
                        secureTextEntry={eye}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        value={values.password}
                      />
                      <TouchableOpacity onPress={handleSeteye}>
                        <Ionicons
                          name={eye ? 'eye-off' : 'eye'}
                          size={30}
                          style={{marginHorizontal: 10, color: MainColor}}
                        />
                      </TouchableOpacity>
                    </View>
                    {errors.password && touched.password ? (
                      <Text
                        style={{
                          color: 'red',
                          paddingBottom: 5,
                          width: '100%',
                          paddingLeft: 8,
                        }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <View>
                      <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                        boxType={'square'}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          marginLeft: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                          }}>
                          Đồng ý với
                        </Text>
                      </View>
                      <TouchableOpacity  onPress={() => DieuKien()}>
                      <View
                        style={{
                          marginLeft: 10,
                        }}>
                          
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            fontSize: 20,
                            fontWeight: '900',
                          }}>
                          Điều kiện hợp tác
                        </Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => login(values)}
                    
                    disabled={!isValid || !dirty}
                    style={{
                      width: '100%',
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 24,
                      backgroundColor: !isValid || !dirty ? 'gray' : MainColor,
                      marginVertical: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        textTransform: 'uppercase',
                        fontWeight: '800',
                      }}>
                      Đăng nhập
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 20,
                    }}
                    
                    >
                    <Text
                      style={{
                        color: SecoundColor,
                        fontSize: 20,
                      }}>
                      Quên mật khẩu ?
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                    }}>
                  </View>
                </View>
              )}
            </Formik>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
