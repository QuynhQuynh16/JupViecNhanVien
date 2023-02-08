import {Text,View,TouchableOpacity} from 'react-native';
import React from 'react';
import { ThongBaoScreenCss } from './ThongBaoScreenCss';
 
const ThongBaoScreen = ({navigation}) => {

  
    return (

      <View style={ThongBaoScreenCss.container}>
      <View style={{marginLeft: 10}}>
        <Text style={{
            fontSize: 40,
            fontWeight: '500',
            marginBottom:30,
            color:"#007aff"
            
            }}>
            VIỆC LÀM MỚI
        </Text>
      </View>

      <View style={{marginLeft: 10}}>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Dịch vụ: Giúp Việc Theo Giờ
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Thời gian: 8h - 20/03/2023          
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Địa điểm: Số 1 Công xã Paris, Quận 1, HCM
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Lương: 100.000 VNĐ / giờ
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Ghi chú: Không
        </Text>
        <View>
          <TouchableOpacity style={ThongBaoScreenCss.buttonNhanviec}>
          <Text style={ThongBaoScreenCss.text}>
                Nhận Việc
            </Text>
          </TouchableOpacity>
        </View>



        <View style={{marginLeft: 10}}>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Dịch vụ: Vệ Sinh Văn Phòng
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Thời gian: 9h - 11/03/2023          
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Địa điểm: HaDo AirPort , Tân Bình , HCM
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Lương: 550.000 VNĐ / giờ
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Ghi chú: Không
        </Text>
        <View>
          <TouchableOpacity style={ThongBaoScreenCss.buttonNhanviec}>
          <Text style={ThongBaoScreenCss.text}>
                Nhận Việc
            </Text>
          </TouchableOpacity>
    </View>
  </View>


  <View style={{marginLeft: 10}}>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Dịch vụ: Giúp Việc Theo Giờ
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Thời gian: 13h - 10/03/2023          
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Địa điểm: 23/41, Gò Vấp . HCM
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Lương: 100.000 VNĐ / giờ
        </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: '500'}}>
            Ghi chú: Không
        </Text>
        <View>
          <TouchableOpacity style={ThongBaoScreenCss.buttonNhanviec}>
          <Text style={ThongBaoScreenCss.text}>
                Nhận Việc
            </Text>
          </TouchableOpacity>
    </View>
  </View>


      </View>



    </View>     
    )};
  
  export default React.memo(ThongBaoScreen);
  