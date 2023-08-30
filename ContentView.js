import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = {
  container: {
    flex: 1,
    marginTop: 3,
  },
  padding: {
    paddingTop: '30px',
  },
};

const ContentView = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={{marginTop: 0}}
        source={{uri: 'https://luckytrip.co.in'}}
        originWhitelist={['*']}
        startInLoadingState
        renderLoading={() => (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
        cacheEnabled={false}
      />
    </View>
  );
};

export default ContentView;
