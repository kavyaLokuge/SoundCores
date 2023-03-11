import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <ScrollView>
     
        {/* <Image
          style={{
            width: '50%',
            height: 80,
            // resizeMode: 'contain',
            alignSelf: 'center',
            resizeMode: 'stretch',
          }}
          source={require('../Components/logo.png')}
        /> */}

<Image source={require('../Components/logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  margin: 30,
                }}
              />
      <View style={styles.aboutContainer}>
        <View style={styles.aboutLayout}>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            SoundCores is a great, easy to use and an extremely useful
            application for your android phone. If you want to detect the sounds
            around your phone, just trigger the application and it will
            immediately tell you the sound in your surroundings.
          </Text>
        </View>
        <Text style={styles.MainTitle}> About Developers </Text>
        <Text style={styles.mainHeader}>
          Developed in partial completion of the Mobile Application Development
          - ICTC 2202.3 module Bsc.Hons in Information and Communication
          Technology{' '}
        </Text>
        <Text style={styles.paraStyle}>
          {' '}
          University of Sri Jayawardenapura{' '}
        </Text>

        <View style={styles.Images}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png',
            }}
          />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            ------------------ Group 03 ------------------- 
            -----Kavya Lokuge - AR98155-----
            -----Nipuni Cabral - AR98155-----
            -----Lihini Perera - AR98155-----
            -----Pavithra Dhananjani - AR98155-----
          </Text>
        </View>

        <Text style={styles.mainHeader}> Follow Us </Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/universitysjp/')
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL('https://www.facebook.com/unisjp')}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/school/university-of-sri-jayewardenepura/',
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: 'https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.bottom}>SoundCores v 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  MainTitle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    // fontStyle: 'italic',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 50,
    marginStart: 10,
    textShadowColor: 'blue',
    textShadowRadius: 6,
    fontFamily: 'serif',
    lineHeight: 40,
  },
  mainHeader: {
    fontSize: 16,
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
    fontFamily: 'sans-serif-medium',
  },
  aboutLayout: {
    backgroundColor: '#1F319D',
    paddingHorizontal: 30,
    marginVertical: 30,
    marginHorizontal: 10,
    marginTop: 30,
    borderRadius: 50,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'JosefinSans_700Bold',
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
    marginTop: 30,
    textAlign: 'justify',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
    marginBottom: 30,
  },
  Images: {
    flexDirection: 'column',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
  bottom: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 30,
  },
});

export default AboutUs;
