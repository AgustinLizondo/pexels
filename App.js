import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagesShower from './screens/home/components/ImagesShower';
import ImageDetails from './screens/detailed/components/ImageDetails';
import MyProvider from './screens/ContextAPI/provider';

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const Dark = '#212121';
const Gray = '#403d39';
const Light = '#ccc5b9';
const White = '#fffcf2';
const Orange = '#eb5e28';
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  textInput: {
    padding: 16,
  },
}
)

const HomeScreen = ({ navigation }) => {

  const [searchTerm, setSearchTerm] = useState('programming');

  return (
    <MyProvider style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.textInput}
          onChangeText={
            (text) => setSearchTerm(text)
          }
          placeholder='Search'
        />
        <ImagesShower searchTerm={searchTerm} navigation={navigation} />
    </MyProvider>
  )
}
const ProfileScreen = () => {
  return (
    <MyProvider style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
    </MyProvider>
  )
}
export const DetailedScreen = ({ item }) => {
  return (
    <MyProvider style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageDetails img={item} />
    </MyProvider>
  )
}

const ChangingIcon = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'home-sharp'
        : 'home-outline';
    } else if (route.name === 'Profile') {
      iconName = focused
        ? 'person-sharp'
        : 'person-outline';
    } else if (route.name === 'Detailed') {
      iconName = focused
        ? 'information-circle'
        : 'information-circle-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: Orange,
  tabBarInactiveTintColor: Gray,
});

export default function App() {
  // const { landscape } = useDeviceOrientation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ChangingIcon}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='Detailed' component={DetailedScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
