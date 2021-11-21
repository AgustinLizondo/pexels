import React, { useState, useContext } from 'react';
import { DataContext } from '../../ContextAPI/provider';
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

const ImageList = ({ photos, navigation }) => {

    const [likedPhotos, setLikedPhotos] = useState([]);
    const { setDetailedImage} = useContext(DataContext);

    const handleLike = (item) => {
        likedPhotos.includes(item)
            ? setLikedPhotos((prevState) => prevState.filter(itemToRemove => itemToRemove !== item))
            : setLikedPhotos((prevState) => [...prevState, item]);
    }
    const handleDetail = (item) => {
        setDetailedImage(item);
        navigation.navigate('Detailed');
    }

    const renderItem = (({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={()=>handleDetail(item)}>
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
                    onPress={() => handleLike(item)}
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
