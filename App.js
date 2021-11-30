import React, { useState, useEffect, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagesShower from './screens/home/components/ImagesShower';
import ImageDetails from './screens/detailed/components/ImageDetails';
import DataProvider, { DataContext } from './screens/ContextAPI/provider';
import LikedImages from './screens/liked/LikedImages';
import SearchingBar from './screens/home/components/SearchingBar';

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const Dark = '#212121';
const Gray = '#403d39';
const Light = '#ccc5b9';
const White = '#fffcf2';
const Orange = '#eb5e28';
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SearchingBar/>
      <ImagesShower navigation={navigation} />
    </View>
  )
}
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LikedImages/>
    </View>
  )
}
export const DetailedScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageDetails />
    </View>
  )
}

const ChangingIcon = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'home-sharp'
        : 'home-outline';
    } else if (route.name === 'Liked') {
      iconName = focused
        ? 'star'
        : 'star-outline';
    } else if (route.name === 'Detailed') {
      iconName = focused
        ? 'information-circle'
        : 'information-circle-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: Dark,
  tabBarInactiveTintColor: Gray,
});

export default function App() {
  // const { landscape } = useDeviceOrientation();
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={ChangingIcon}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Liked' component={ProfileScreen} />
          <Tab.Screen name='Detailed' component={DetailedScreen} />
        </Tab.Navigator>
      </NavigationContainer >
    </DataProvider>
  );
}
