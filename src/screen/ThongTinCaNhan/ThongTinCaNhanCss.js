import {Platform, StyleSheet} from 'react-native';
import {widthWindow} from '../../utiliti/Style/reponsive';
import {MainColor} from '../../utiliti/Style/style';
export const ThongTinCaNhanCss = StyleSheet.create({
    container: 
    {
        flex: 1,
        alignItems:'center',
        justifyContent: "center"
    },

    image:
    {
        width:200,
        height:200,
        marginBottom:90   

    },

    butonLogOut:
    {
        width: '70%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        marginVertical: 4,
        backgroundColor: '#007aff',
        marginTop:20,
        marginLeft:65,               
    },


    buttonUpdate:
    {
        width: '70%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        marginVertical: 4,
        backgroundColor:  '#8ec541',
        marginTop:50,
        marginLeft:65,               
    },

    text: 
    {
        fontSize: 20,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '800',
    },
    box:
    {
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1.2,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:20,
    },

    lable:
    {
        fontSize: 20,
        marginLeft:10
    },

    title:
    {
        fontSize: 30,
        color: 'black',
        fontWeight: '900',
        marginTop:50,
        marginStart:47,
        marginBottom:20

        
    }

})