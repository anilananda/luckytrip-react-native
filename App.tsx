/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View, Text} from 'react-native';
import ContentView from './ContentView';
import NetInfo from '@react-native-community/netinfo';

function App(): JSX.Element {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      //console.log('Connection type', state.type);
      //console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected == null ? false : state.isConnected);
      //setIsConnected(false);
    });

    // Unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" />
      {isConnected ? (
        <ContentView />
      ) : (
        <View style={styles.noInternetView}>
          <Text style={{color: '#fff', fontSize: 17}}>
            Offline - No Internet ...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  noInternetView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
