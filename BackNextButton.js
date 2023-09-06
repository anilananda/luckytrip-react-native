import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

function BackNextButton() {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ef0000',
      }}>
      <TouchableOpacity onPress={backButtonHandler}>
        <Text style={{color: 'white', fontSize: 20}}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={frontButtonHandler}>
        <Text style={{color: 'white', fontSize: 20}}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BackNextButton;
