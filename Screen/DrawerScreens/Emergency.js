// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// 1. Either import the whole module
import Communications from 'react-native-communications';
/* 2. Or import single methods
 import {
  phonecall,
  email,
  text,
  web
} from 'react-native-communications';*/

const Emergency = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Make Emergency Phone Call, Send SMS or Email
        </Text>
        {/* Call: phonecall(phoneNumber, prompt) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.phonecall('0123456789', true)}>
          <Text style={styles.buttonTextStyle}> Call National Help Service</Text>
        </TouchableOpacity>
        {/* Mail: email(to, cc, bcc, subject, body) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.email(
              ['NationalHelpService@gmail.com'],
              null,
              null,
              'Demo Subject',
              'Demo Content for the mail',
            )
          }>
          <Text style={styles.buttonTextStyle}>Send an Email to National Help Service</Text>
        </TouchableOpacity>
        {/* SMS: text(phoneNumber = null, body = null) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.text('0123456789')}>
          <Text style={styles.buttonTextStyle}>Send a Text/iMessage to National Help Service </Text>
        </TouchableOpacity>
        {/* Web: web(address = null)*/}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.web('https://www.srilanka.travel/emergency-services')
          }>
          <Text style={styles.buttonTextStyle}> Emergency Hotline List</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: 'grey',
            position: 'absolute', 
            bottom: 0,
          }}>

          This feature will be available only for the users who have subscribed
          to our premium plan. You can use this feature free for a trial period
          of 14 days. If you are willing to subscribe to our premium plans,
          Please visit the subscription pane.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#1F319D',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
