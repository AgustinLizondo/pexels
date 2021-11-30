import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { DataContext } from '../ContextAPI/provider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import {GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// GoogleSignin.configure({
    // webClientId: '334365545511-0h91c686s65757g1ktu6jqltqiflvos1.apps.googleusercontent.com ',
    // offlineAccess: true,
// })
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight - 100,
    },
    item: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 16,
        borderRadius: 8,
        marginLeft: 8,
    },
    image: {
        width: windowWidth - 16,
        height: windowWidth - 16,
        borderRadius: 4,
    },
    text: {
        padding: 4,
        color: '#efefef',
        fontWeight: 'bold',
        fontSize: 16,
    },
    baseButtons: {
        width: windowWidth -16,
        backgroundColor: 'rgba(50,50,50,0.5)',
        justifyContent: 'space-evenly',
        top: -48, 
        flexDirection: 'row',
        alignItems: 'center',
    }
})

const LikedImages = () => {

    const {likedPhotos} = useContext(DataContext);
    // const [isLogged, setIsLogged] = useState(false);
    // const [userGoogleInfo, setUserGoogleInfo] = useState({});

    // const signIn = async () =>{
        // try{
            // await GoogleSignin.hasPlayServices();
            // const userInfo = await GoogleSignin.signIn();
            // setUserGoogleInfo(userInfo);
            // setIsLogged(true);
        // }
        // catch(err) {
            // console.log(err.message);
        // }
    // }

    const renderItem = (({ item }) => (
        <View style={styles.item}>
                <Image source={
                    {
                        uri: item.photoSRCL
                    }
                }
                    style={styles.image}
                />
            <View style={styles.baseButtons}>
                <Text style={styles.text} >{item.photographer}</Text>
            </View>
        </View>
    ))

    // const checkLogin = () => {
        // {isLogged
            // ? setIsLogged(false)
            // : setIsLogged(true)
        // }
    // }

    return (
        <View style={styles.container}>
        {/* isLogged
        ?
        ( */}
             {likedPhotos.length > 0
                ? 
                <FlatList
                    data={likedPhotos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
                : 
                <Text style={{marginTop: windowHeight-110}}>You haven't liked photos yet</Text>
             }
        {/* )
        :   
        (
            <GoogleSigninButton
                onPress={signIn}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                style={{width: 100, height: 100}}
            />
            userGoogleInfo.user.name
                                email
                                photo
            )
         */}
        </View>
    )
}

export default LikedImages
