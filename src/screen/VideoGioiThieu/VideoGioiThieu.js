import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class VideoGioiThieu extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.youtube.com/watch?v=RgIRUG7Tj7s&ab_channel=JupViec.vn'}} />;
  }
}

export default React.memo(VideoGioiThieu);