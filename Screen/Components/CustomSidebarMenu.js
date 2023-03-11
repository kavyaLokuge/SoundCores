// Import React and Component
// import React from 'react';
import * as React from 'react';
import {View, Text, Alert, StyleSheet, ImageBackground} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../Image/bg.png')}
        style={{padding: 2}}>
        <View style={stylesSidebar.profileHeader}>
          <View style={stylesSidebar.profileHeaderPicCircle}>
            <Text style={{fontSize: 40, color: '#00008B'}}>
              {'Sound Cores'.charAt(0)}
            </Text>
          </View>
          <Text style={stylesSidebar.profileHeaderText}>Sound Cores</Text>
        </View>
        <View style={stylesSidebar.profileHeaderLine} />
      </ImageBackground>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{color: '#1F319D'}}>Logout</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    auth()
                      .signOut()
                      .then(() => props.navigation.replace('Auth'))
                      .catch(error => {
                        console.log(error);
                        if (error.code === 'auth/no-current-user') {
                          props.navigation.replace('Auth');
                        } else {
                          alert(error);
                        }
                      });
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#1F319',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: '#FFFFFF',
    color: 'white',
    backgroundColor: '#FFFFFF ',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});

