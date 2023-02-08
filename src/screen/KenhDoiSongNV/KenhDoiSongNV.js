import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class KenhDoiSongNV extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.facebook.com/JupViec' }} />;
  }
}

export default React.memo(KenhDoiSongNV);