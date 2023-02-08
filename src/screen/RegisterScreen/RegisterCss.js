import {StyleSheet} from 'react-native';
import {SecoundColor,} from '../../utiliti/Style/style';

export const RegisterCss = StyleSheet.create({

    logo:
    {
        width: 300,
        height: 100,
    },

    lable:
    {
        fontSize: 20,
    },

    box:
    {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1.2,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    boxLocation:
    {
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        horderWidth: 1,
        borderColor: SecoundColor,
        marginVertical: 8,

    },


})