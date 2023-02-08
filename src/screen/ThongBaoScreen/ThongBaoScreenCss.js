import {StyleSheet} from 'react-native';
export const ThongBaoScreenCss = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: "center",
        marginBottom:100,
        marginTop:30
      },

      image:{
        width:200,
        height:200,
        marginBottom:90   

      },

      buttonNhanviec:
      {
          width: '50%',
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 24,
          marginVertical: 4,
          backgroundColor:  '#8ec541',
          marginTop:10,
          marginLeft:96,
          marginBottom:30
             
      },
      text: 
      {
          fontSize: 20,
          color: 'white',
          textTransform: 'uppercase',
          fontWeight: '800',
      },

})