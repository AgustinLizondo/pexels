import React, { useState, useRef, useContext } from 'react';
import { AppContext } from '../../ContextAPI/provider';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ImageDetails from '../../detailed/components/ImageDetails';
import { DetailedScreen } from '../../../App';
//StatusBar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight - 110,
    },
    item: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 16,
        backgroundColor: '#555',
        borderRadius: 8,
        marginBottom: 8,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

const ImageList = ({ photos, navigation }) => {

    const [likedPhotos, setLikedPhotos] = useState([]);
    const [detailedImage, setDetailedImage] = useContext(AppContext);

    const handlePress = (item) => {
        likedPhotos.includes(item)
            ? setLikedPhotos((prevState) => prevState.filter(itemToRemove => itemToRemove !== item))
            : setLikedPhotos((prevState) => [...prevState, item]);
    }

    const renderItem = (({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                setDetailedImage({ object: detailedObject });
                navigation.navigate('Detailed');
            }
            }>
                <Image source={
                    {
                        uri: item.photoSRCL
                    }
                }
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.baseButtons}>
                <Text style={styles.text} >{item.photographer}</Text>
                <FontAwesomeIcon
                    icon={faStar}
                    size={24}
                    color={
                        likedPhotos.includes(item)
                            ? ('yellow')
                            : ('white')
                    }
                    onPress={() => handlePress(item)}
                />
            </View>
        </View>
    ))

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default ImageList
