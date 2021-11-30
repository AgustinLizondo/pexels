import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../ContextAPI/provider';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight - 100,
    },
    image: {
        width: windowWidth,
        height: windowHeight - 100,
    },
    phname: {
        top: -48,
        backgroundColor: 'rgba(50,50,50,0.5)',
        color: '#ccc',
        textAlign: 'center',
        padding: 6,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

const ImageDetails = () => {

    // const handleOpenPh = (url) => {
        // Linking.openURL(url);
    // }

    const { detailedImage } = useContext(DataContext);
    return (
        <View style={styles.container}>
            <Image source={
                {
                    uri: detailedImage.photoSRCL
                }
            }
                style={styles.image}
            />
            {/* <TouchableOpacity onPress={() => handleOpenPh(detailedImage.photographerURL)}> */}
                <Text style={styles.phname}>{detailedImage.photographer}</Text>
            {/* </TouchableOpacity> */}
        </View>
    )
}

export default ImageDetails