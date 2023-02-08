import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  backgroundColor,
  MainColor,
  SecoundColor,
} from '../../utiliti/Style/style';
import { RegisterCss } from './RegisterCss';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import {widthWindow} from '../../utiliti/Style/reponsive';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { AuthContext } from '../../context/AuthContext';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(6, 'Tên  quá ngắn')
    .max(30, 'Tên  quá dài')
    .required('Vui lòng nhập họ và tên'),

  email: Yup.string()
    .email('Nhập đúng định dạng Email')
    .required('Vui lòng nhập Email'),

  password: Yup.string()
    .min(4, 'Mật khẩu quá ngắn')
    .max(20, 'Mật khẩu quá dài')
    .required('Vui lòng nhập mật khẩu'),
    
  repassword: Yup.string()
    .min(4, 'Mật khẩu quá ngắn')
    .max(20, 'Mật khẩu quá dài')
    .required('Vui lòng nhập mật khẩu')
    .oneOf(
      [Yup.ref('password'), null],
      'Mật khẩu xác thực phải giống với mật khẩu',
    ),
});
const RegisterScreen = ({navigation,route}) => {
  const [toggleCheckBoxHour, setoggleCheckBoxHour] = useState(false);
  const [toggleCheckBoxFullTime, setToggleCheckBoxFullTime] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const[city,setCity]=useState('');
  const[district,setDistrict]=useState('');

  

  useEffect(()=>{
    route.params == undefined ?setCity('') :setCity(route.params.selected)
    route.params == undefined ?setDistrict('') :setDistrict(route.params.selectedOnDistrict)
  },[route.params])

  const url = "https://nhutthang-jupviec-nodejs.onrender.com/api/create-new-staff";
  const handleRegister = async (values)  => {
     axios.post('https://nhutthang-jupviec-nodejs.onrender.com/api/create-new-staff',{
        email:values.email,
        password:values.password,
        firstName:values.fullname
    
      },).then((res)=>{
        console.log(res.data.message)
        const result = res.data.message;
        if (result == 'OK') {
          Alert.alert('Thông báo', 'Đăng kí thành công');
          navigation.pop();

        }else {
          Alert.alert('Thông báo', 'Đăng kí thất bại');
        }
        
      }).catch((err)=>{
        console.log(err)
      })
      
  };


  const handleLocation = () =>{
    navigation.navigate('LocationScreen')
  }
  const [eye, setEye] = useState(true);
  const [rePassword, setRePassword] = useState(true);

  const handleSeteye = () => {
    setEye(!eye);
  };
  const handleRePassWord = () => {
    setRePassword(!rePassword);
  };
  const handleGoback = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
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
                        <Ionicons name="chevron-back-sharp" size={40} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: widthWindow * 0.05,
                    }}>
                    <Image
                      source={require('../../assets/img/logoJupViec.png')}
                      style={RegisterCss.logo}
                    />
                </View>
              </View>
              <Formik
                initialValues={{
                  email:'',
                  fullname: '',
                  password: '',
                  repassword: '',
                  
                }}
                validationSchema={SignupSchema}
                onSubmit={handleRegister}>
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
                        marginVertical: 10,
                      }}>
                      <View>
                        <Text
                          style={RegisterCss.lable}>
                          Tên
                        </Text>
                      </View>
                      <View
                        style={RegisterCss.box}>
                        <TextInput
                          style={{
                            padding: widthWindow >= 900 ? 20 : 10,
                            flex: 1,
                          }}
                          onChangeText={handleChange('fullname')}
                          onBlur={() => setFieldTouched('fullname')}
                          value={values.fullname}
                          touched={touched.fullname}
                        />
                      </View>
                      {errors.fullname && touched.fullname ? (
                        <Text
                          style={{
                            color: 'red',
                            width: '100%',
                          }}>
                          {errors.fullname}
                        </Text>
                      ) : null}
                      <View>
                        <Text
                          style={RegisterCss.lable}>
                          Email
                        </Text>
                      </View>
                      <View
                        style={RegisterCss.box}>
                        <TextInput
                          style={{
                            padding: widthWindow >= 900 ? 20 : 10,
                            flex: 1,
                          }}
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
                            width: '100%',
                          }}>
                          {errors.email}
                        </Text>
                      ) : null}
                      <View>
                        <Text
                          style={RegisterCss.lable}>
                          Mật khẩu
                        </Text>
                      </View>
                      <View
                        style={RegisterCss.box}>
                        <TextInput
                          touched={touched.password}
                          style={{
                            padding: widthWindow >= 900 ? 20 : 10,
                            flex: 1,
                          }}
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
                      <View>
                        <Text
                          style={RegisterCss.lable}>
                          Nhập lại mật khẩu
                        </Text>
                      </View>
                      <View
                        style={RegisterCss.box}>
                        <TextInput
                          touched={touched.repassword}
                          style={{
                            padding: widthWindow >= 900 ? 20 : 10,
                            flex: 1,
                          }}
                          secureTextEntry={rePassword}
                          onChangeText={handleChange('repassword')}
                          onBlur={() => setFieldTouched('repassword')}
                          value={values.repassword}
                        />
                        <TouchableOpacity onPress={handleRePassWord}>
                          <Ionicons
                            name={rePassword ? 'eye-off' : 'eye'}
                            size={30}
                            style={{marginHorizontal: 10, color: MainColor}}
                          />
                        </TouchableOpacity>
                      </View>
                      {errors.repassword && touched.repassword ? (
                        <Text
                          style={{
                            color: 'red',
                            width: '100%',
                          }}>
                          {errors.repassword}
                        </Text>
                      ) : null}
                    </View>

                    {
                      city && district ? 
                      <View>
                        <Text style={{
                            fontSize: 18, marginBottom:10}}>
                          Khu vực làm việc đã chọn: 
                          <Text> {district} </Text>
                          {/* <Text>{city}</Text> */}
                        </Text>
                      </View> :
                    <TouchableOpacity
                    style={{
                      width: '100%',
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: SecoundColor,
                      marginVertical: 8,
                    }}
                    onPress={
                      handleLocation
                    }
                    >
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <EvilIcons
                          name="location"
                          size={25}
                          color={SecoundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: SecoundColor,
                          marginLeft: 12,
                          
                        }}>
                        Chọn khu vực làm việc
                      </Text>
                    </View>
                    </TouchableOpacity>
              }
                    <TouchableOpacity
                      onPress={() => handleRegister(values)}
                      disabled={!isValid || !dirty}
                      style={{
                        width: '100%',
                        height: 48,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 24,
                        backgroundColor:
                          !isValid || !dirty ? 'gray' : MainColor,
                        marginVertical: 4,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'white',
                          textTransform: 'uppercase',
                          fontWeight: '800',
                        }}>
                        Tạo tài khoản
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
