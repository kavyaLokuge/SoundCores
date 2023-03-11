// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView, Image, Touchableopacity} from 'react-native';

const birdWatchers = () => {
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
              fontSize: 25,

              textAlign: 'center',
              marginBottom: 16,
            }}>
            Hello Bird Watcher!
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Have trouble identifying the birds around you? No need to worry! now
            you can get to know what birds are around you by a simple click!
            This model is trained specifically to identify millions of bird
            sounds! click on the mic icon to identify the bird with its sound!
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This feature will be available only for the users who have
            subscribed to our premium plan. You can use this feature free for a
            trial preiod of 14 days. If you are willing to subscribe to our
            premium plans, Please visit the subscription pane.
          </Text>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginBottom: 16,
            }}></Text>
          <Text
            style={{
              fontSize: 21,
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

export default birdWatchers;
