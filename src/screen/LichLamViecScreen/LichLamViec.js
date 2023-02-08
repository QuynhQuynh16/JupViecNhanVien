import {Text,View,TouchableOpacity} from 'react-native';
import React from 'react';
import {LichLamViecCss} from './LichLamViecCss';

const LichLamViec = ({navigation}) => {
  return (

    <View style={LichLamViecCss.container}>
    <View style={{marginLeft: 10}}>
      <Text style={{
          fontSize: 40,
          fontWeight: '500',
          marginBottom:30,
          color:"#007aff"
          
          }}>
          LỊCH LÀM VIỆC
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
 


    </View>



  </View>     
  )};

export default React.memo(LichLamViecCss);

  