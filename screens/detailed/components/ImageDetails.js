import React, { useState, useContext } from 'react';
import { AppContext } from '../../ContextAPI/provider';
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
    }
});

const ImageDetails = (item) => {
    const [detailedImage, setDetailedImage] = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text>{detailedImage.photographer}</Text>
            <Image source={
                {
                    uri: detailedImage.photoSRCL
                }
            }
                style={styles.image}
            />
        </View>
    )
}

export default ImageDetails