// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView, Image, Touchableopacity} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,

              textAlign: 'center',
              marginBottom: 16,
            }}>
            Ready for Listening
          </Text>
        </View>
        <Image
          style={{
            width: '50%',
            height: 200,
            // resizeMode: 'contain',
            alignSelf: 'center',
            resizeMode: 'stretch',
          }}
          source={require('../Components/recorder.png')}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          SoundCores v 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
