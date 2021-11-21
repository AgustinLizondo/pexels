import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../ContextAPI/provider';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight - 110,
    },
    image: {
        width: windowWidth,
        height: 500,
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

    const  {detailedImage} = useContext(DataContext);
    return (
        <View style={styles.container}>
            <Image source={
                {
                    uri: detailedImage.photoSRCL
                }
            }
                style={styles.image}
            />
            <Text style={styles.phname}>{detailedImage.photographer}</Text>
        </View>
    )
}

export default ImageDetails