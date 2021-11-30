import React, { useState, useEffect, useContext } from 'react'
import ImageList from './ImageList'
import { getData } from '../api/pexels'
import { DataContext } from '../../ContextAPI/provider'

const ImagesShower = ({ navigation }) => {

    const [photos, setPhotos] = useState([]);
    const { searchTerm } = useContext(DataContext);

    const loadImages = async () => {
        const res = await getData(searchTerm),
            data = res.data.photos
        data.forEach(element => {
            let photo = {
                id: element.id,
                photographer: element.photographer,
                photographerURL: element.photographer_url,
                photoSRCM: element.src.medium,
                photoSRCL: element.src.large,
                avgPhotoColor: element.avg_color,
            };
            setPhotos((actualPhotoState) => [...actualPhotoState, photo])
        });
    }

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <ImageList photos={photos} navigation={navigation} />
    )
}


export default ImagesShower
