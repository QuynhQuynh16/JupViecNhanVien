import { Image, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { ThongTinCaNhanCss } from './ThongTinCaNhanCss';
import {widthWindow} from '../../utiliti/Style/reponsive';


const ThongTinCaNhan = ({navigation}) => {
    const handleLogout =()  => {
        navigation.navigate("WellCome")
      };
    
  return (
    <View>
        <View>
        <Text style={ThongTinCaNhanCss.title}>THÔNG TIN NHÂN VIÊN</Text>
        </View>

        <View>
              <Image
                source={require('../../assets/img/User.png')}
                style={{width:50, height: 50 ,marginStart:170}}
                resizeMode={'center'}
              />
            </View>


        <View>
          <Text style={ThongTinCaNhanCss.lable}>
              Tên Nhân Viên
          </Text>
        </View>
        <View style={ThongTinCaNhanCss.box}>
          <TextInput
            style={{padding: widthWindow >= 900 ? 20 : 10,flex: 1}}/>
        </View>


        <View>
          <Text style={ThongTinCaNhanCss.lable}>
              Email
          </Text>
        </View>
        <View style={ThongTinCaNhanCss.box}>
          <TextInput
            style={{padding: widthWindow >= 900 ? 20 : 10,flex: 1}}/>
        </View>

        <View>
          <Text style={ThongTinCaNhanCss.lable}>
              Mật khẩu
          </Text>
        </View>      
        <View style={ThongTinCaNhanCss.box}>
          <TextInput
            style={{padding: widthWindow >= 900 ? 20 : 10,flex: 1}}/>
        </View>


        <View>
          <Text style={ThongTinCaNhanCss.lable}>
              Địa chỉ làm việc
          </Text>
        </View>
        
        <View style={ThongTinCaNhanCss.box}>
          <TextInput
            style={{padding: widthWindow >= 900 ? 20 : 10,flex: 1}}/>
        </View>


        <View>
        <TouchableOpacity
          
          style={ThongTinCaNhanCss.buttonUpdate}>

          <Text style={ThongTinCaNhanCss.text}>
             Cập nhật
          </Text>
        </TouchableOpacity>

        </View>

        <View>
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={ThongTinCaNhanCss.butonLogOut}>

            <Text style={ThongTinCaNhanCss.text}>
                Đăng Xuất
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default ThongTinCaNhan
