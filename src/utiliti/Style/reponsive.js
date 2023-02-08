import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export const widthWindow = Dimensions.get('window').width;
export const heightWindow = Dimensions.get('window').height;
export const fontSizeItem = widthWindow >= 900 ? 24 : 18;
export const Btnsize = widthWindow >= 900 ? 60 : 48;
