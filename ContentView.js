import React, {useRef, useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import BackNextButton from './BackNextButton';

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
  const webPageurl = 'https://luckytrip.co.in/';

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const webviewRef = useRef(null);

  //#region =====Start Back Handel with button===============

  const [currentUrl, setCurrentUrl] = useState(webPageurl);
  const [isVisibleBackButton, setIsVisibleBackButton] = useState(false);
  useEffect(() => {
    console.log(currentUrl);

    currentUrl === webPageurl
      ? setIsVisibleBackButton(false)
      : setIsVisibleBackButton(true);
  }, [currentUrl]);

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  //#endregion =====End Back Handel with button===============

  //#region =========Start Hardware back handel====================

  // const [currentUrl, setCurrentUrl] = useState(webPageurl);

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

  //     return () => {
  //       BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
  //     };
  //   }
  // }, [currentUrl]);

  // const HandleBackPressed = () => {
  //   console.log('back handel ->', currentUrl);

  //   if (currentUrl === webPageurl || currentUrl === '') return false;

  //   if (webviewRef.current) {
  //     webviewRef.current.goBack();
  //     return true;
  //   }
  //   return false;
  // };

  //#endregion =========END Hardware back handel====================
  const jsCode = `document.getElementById('myAppPromotion').style.display = 'none';`;

  return (
    <View style={styles.container}>
      <WebView
        style={{marginTop: 0}}
        source={{uri: webPageurl}}
        originWhitelist={['*']}
        startInLoadingState
        javaScriptEnabled={true}
        injectedJavaScript={jsCode}
        renderLoading={() => (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
        cacheEnabled={false}
        ref={webviewRef}
        // onNavigationStateChange={navState => {
        //   setCanGoBack(navState.canGoBack);
        //   setCanGoForward(navState.canGoForward);
        //   setCurrentUrl(navState.url);
        // }}

        onNavigationStateChange={navState => {
          setCanGoForward(navState.canGoForward); ////enable only if want back with button
          setCanGoBack(navState.canGoBack);
          setCurrentUrl(navState.url);
        }}
      />
      {isVisibleBackButton && <BackNextButton />}
    </View>
  );
};

export default ContentView;
