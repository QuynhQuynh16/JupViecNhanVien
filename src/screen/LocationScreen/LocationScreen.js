
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {SelectList} from 'react-native-dropdown-select-list';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationScreen = ({navigation}) => {

    const [selected, setSelected] = useState([]);
    const [selectedOnDistrict, setSelectedOnDistrict] = useState([]);
    const [selectedWard, setSelectedWard] = useState([]);
    const handleGoback = () => {
      navigation.pop();
    };
  console.log(selected,selectedOnDistrict)
    const [city, setCity] = useState([
      {key: '1', value: 'Hồ Chí Minh'},
      {key: '2', value: 'Đà Nẵng'},
      {key: '3', value: 'Hà Nội'},
    ]);
    const [district, setDistrict] = useState([]);
    const [setWard] = useState([])
  return (
    <View>
      <View
      style={{
        alignItems: 'flex-start',
        marginTop:10
      }}>
      <TouchableOpacity onPress={handleGoback}>
        <Ionicons name="chevron-back-sharp" size={40} />
      </TouchableOpacity>
    </View>
    
    <View style={{
      marginTop:60,
      marginStart:20,
      marginEnd:20,
    }}>
      
    <Text style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#007aff',
            marginVertical: 4,
            marginTop:10,
            fontWeight: '900'
          }}>
             Chọn địa điểm làm việc
    </Text>

    <Image
      source={require('../../assets/img/location.png')}
      style={{width: 100, height: 100 ,marginStart:130,marginBottom:20}}
    />

    <View style={{marginBottom:10,marginTop:50}}>
    <SelectList
     setSelected={val => setSelected(val)}
     data={city}
     save="value"
     onSelect={() => {
       if (selected == 'Hồ Chí Minh') {
         setDistrict([
           {
             key: 1,
             value: 'Quận 1',
           },
           {
             key: 2,
             value: 'Quận 2',
           },
           {
             key: 3,
             value: 'Quận 3',
           },
           {
             key: 4,
             value: 'Quận 4',
           },
           {
             key: 5,
             value: 'Quận 5',
           },
           {
             key: 6,
             value: 'Quận 6',
           },
           {
             key: 7,
             value: 'Quận 7',
           },
           {
             key: 8,
             value: 'Quận 8',
           },
           {
             key: 9,
             value: 'Quận 9',
           },
           {
             key: 10,
             value: 'Quận 10',
           },
           {
             key: 11,
             value: 'Quận 11',
           },
           {
             key: 12,
             value: 'Quận 12',
           },
           {
             key: 13,
             value: 'Quận Bình Tân',
           },
           {
             key: 14,
             value: 'Quận Bình Thạnh',
           },
           {
             key: 15,
             value: 'Quận Gò Vấp',
           },
           {
             key: 16,
             value: 'Quận Phú Nhuận',
           },
           {
            key: 17,
            value: 'Quận Tân Bình',
           },
           {
            key: 18,
            value: 'Quận Tân Phú',
            },
            {
              key: 19,
              value: 'Quận Thủ Đức',
            },
         ]);
       }
       if (selected == 'Hà Nội') {
         setDistrict([  
           {
             key: 1,
             value: 'Bắc Từ Liêm',
           },
           {
             key: 2,
             value: 'Ba Đình',
           },
           {
             key: 3,
             value: 'Cầu Giấy',
           },
           {
            key: 4,
            value: 'Đống Đa',
           },
           {
            key: 5,
            value: 'Hai Bà Trưng',
           },
           {
            key: 6,
            value: 'Hoàn Kiếm',
           },
           {
            key: 7,
            value: 'Hà Đông',
           },
           {
            key: 8,
            value: 'Hoàng Mai',
           },
           {
            key: 9,
            value: 'Long Biên',
           },
           {
            key: 10,
            value: 'Thanh Xuân',
           },
           {
            key: 11,
            value: 'Tây Hồ',
           },
           {
            key: 12,
            value: 'Nam Từ Liêm',
           },
         ]);
       }
       if (selected == 'Đà Nẵng'){
        setDistrict([
            {
              key: 1,
              value: 'Quận Hải Châu',
            },
            {
              key: 2,
              value: 'Quận Cẩm Lệ',
            },
            {
              key: 3,
              value: 'Quận Thanh Khê',
            },
            {
              key: 4,
              value: 'Quận Liên Chiểu',
            },
            {
              key: 5,
              value: 'Quận Ngũ Hành Sơn',
            },
            {
              key: 6,
              value: 'Quận Sơn Trà',
            },
            {
              key: 7,
              value: 'Huyện Hòa Vang',
            },
            {
              key: 8,
              value: 'Huyện Hoàng Sa',
            },
          ]);
       }
     }}
     //label="Categories"
     placeholder="Chọn thành phố"
     search={false}
     style={{
      marginTop:100
     }}

     
   /></View>
   <SelectList
     setSelected={val => setSelectedOnDistrict(val)}
     data={district}
     save="value"
     onSelect={() => {
       if (
         selectedOnDistrict == 'Quận Tân Bình ' &&
         selected == 'Hồ Chí Minh'
       ) {
         setWard([
           {key: 1, value: 'Phường 1'},
           {key: 2, value: 'Phường 2'},
         ]);
       }
     }}
     //label="Categories"
     placeholder="Chọn Quận"
     search={false}
   />
<View>

<Text style={{
            fontSize: 20,
            marginTop:10,
            fontWeight: '400',
            
          }}> Làm việc tại:
   </Text>
   <Text style={{
            fontSize: 20,
            marginTop:10,
            fontWeight: '400',
            
          }}> Thành Phố:<Text>
          {{selected} && {selectedOnDistrict} && {selectedWard} ? (
            <>
              <Text>
                {` `}{selected} 
              </Text>
            </>
          ) : (
            ''
          )}
        </Text> 
   </Text>
   
   <Text style={{
            fontSize: 20,
            marginTop:10,
            fontWeight: '400',
            
          }}> Quận (Huyện):<Text>
          {{selected} && {selectedOnDistrict} && {selectedWard} ? (
            <>
              <Text>
              {` `}{selectedOnDistrict}
              </Text>
            </>
          ) : (
            ''
          )}
        </Text>
   </Text>



   
   <TouchableOpacity
      style={{
      backgroundColor: '#8ec541',
      width: '90%',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      marginVertical: 4,
      marginTop:100,
      marginLeft:25
      }}
      //onPress={()=>{navigation.navigate('Register');}}
      onPress={()=>{
        navigation.navigate('Register',{
      selected,selectedOnDistrict
        })
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: 'white',
          fontWeight: '800',
          textTransform: 'uppercase'}}
      >
            Lưu
      </Text>
  </TouchableOpacity>

</View>

 </View>
 </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})