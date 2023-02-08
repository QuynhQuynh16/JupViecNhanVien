import {Platform, StyleSheet} from 'react-native';
import {widthWindow} from '../../utiliti/Style/reponsive';
import {MainColor} from '../../utiliti/Style/style';
export const loginscreencss = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: 'white',
  },
  freeBtn: {
    width: '90%',
    backgroundColor: MainColor,
    marginVertical: 10,
    padding: widthWindow >= 900 ? 20 : 10,
    borderRadius: 4,
    height: 46,
  },
  textFree: {
    textAlign: 'center',
    color: '#FEFCDA',
    fontSize: widthWindow >= 900 ? 20 : 16,
    fontWeight: '600',
  },
  signInBtn: {
    width: '100%',
    marginVertical: 4,
    fontWeight: '600',
    height: 46,
    ...Platform.select({
      ios: {
        backgroundColor: MainColor,
        borderRadius: 4,
        justifyContent: 'center',
      },
    }),
  },
  signInText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  InputCss: {
    padding: widthWindow >= 900 ? 20 : 10,
    flex: 1,
  },
  MainCssInput: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1.2,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
