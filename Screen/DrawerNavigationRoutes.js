// Import React
// import React from 'react';
import * as React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import rating from './DrawerScreens/rating';
import Speech2Text from './DrawerScreens/Speech2Text';
import Text2Speech from './DrawerScreens/Text2Speech';
import AudioTherapyScreen from './DrawerScreens/AudioTherapyScreen';
import birdWatchers from './DrawerScreens/birdWatchers';
import GeoLocation from './DrawerScreens/GeoLocation';
import Emergency from './DrawerScreens/Emergency';
import Weather from './DrawerScreens/Weather';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Compass from './DrawerScreens/Compass';
import AboutUs from './DrawerScreens/AboutUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Sound Type Identifier', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Speech2TextScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Speech2Text"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Speech2Text"
        component={Speech2Text}
        options={{
          title: 'Speech to Text', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const Text2SpeechScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Text2Speech"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Text2Speech"
        component={Text2Speech}
        options={{
          title: 'Text to Speech', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const AudioTherapyScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AudioTherapyScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AudioTherapyScreen"
        component={AudioTherapyScreen}
        options={{
          title: 'Audio Therapy', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const RatingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="rating"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1F319D', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="rating"
        component={rating}
        options={{
          title: 'Rate Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const BirdWatchersScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="birdWatchers">
      <Stack.Screen
        name="birdWatchers"
        component={birdWatchers}
        options={{
          title: ' ♛ Bird Identifier for BirdWatchers', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const GeoLocationScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="GeoLocation">
      <Stack.Screen
        name="GeoLocation"
        component={GeoLocation}
        options={{
          title: '♛ GeoLocation for BirdWatchers', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const EmergencyScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Emergency">
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{
          title: '♛ Inform Emergency', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const WeatherScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Weather">
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{
          title: '♛ Weather for BirdWatchers', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const CompassScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Compass">
      <Stack.Screen
        name="Compass"
        component={Compass}
        options={{
          title: '♛ Compass', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const AboutUsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="About Us">
      <Stack.Screen
        name="About Us"
        component={AboutUs}
        options={{
          title: 'About Us', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1F319D', //Set Header color
          },
          headerTintColor: '#D4AF37', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        backgroundColor: '#c6cbef',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Sound Type Identifier'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="Speech2TextScreenStack"
        options={{drawerLabel: 'Speech to Text'}}
        component={Speech2TextScreenStack}
      />
      <Drawer.Screen
        name="Text2SpeechScreenStack"
        options={{drawerLabel: 'Text to Speech'}}
        component={Text2SpeechScreenStack}
      />
      <Drawer.Screen
        name="AudioTherapyScreenStack"
        options={{drawerLabel: 'Audio Therapy'}}
        component={AudioTherapyScreenStack}
      />

      <Drawer.Screen
        name="birdWatchersScreenStack"
        options={{drawerLabel: '♛ Bird Identifier for BirdWatchers'}}
        component={BirdWatchersScreenStack}
      />
      <Drawer.Screen
        name="GeoLocationScreenStack"
        options={{drawerLabel: '♛ GeoLocation for BirdWatchers'}}
        component={GeoLocationScreenStack}
      />
      
      <Drawer.Screen
        name="WeatherScreenStack"
        options={{drawerLabel: '♛ Weather for BirdWatchers'}}
        component={WeatherScreenStack}
      />
      <Drawer.Screen
        name="CompassScreenStack"
        options={{drawerLabel: '♛ Compass'}}
        component={CompassScreenStack}
      />
      <Drawer.Screen
        name="EmergencyScreenStack"
        options={{drawerLabel: '♛ Inform Emergency'}}
        component={EmergencyScreenStack}
      />
      <Drawer.Screen
        name="rating"
        options={{drawerLabel: 'Rate Us'}}
        component={RatingScreenStack}
      />
      <Drawer.Screen
        name="AboutUsScreenStack"
        options={{drawerLabel: 'About Us'}}
        component={AboutUsScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
