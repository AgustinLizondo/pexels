import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const ImageDetails = (img) => {
    console.log(img)

    return (
        <View style={styles.container}>
            <Image />
        </View>
    )
}

export default ImageDetails