import React, { useState, useEffect } from 'react'
import ImageList from './ImageList'
import { getData } from '../api/pexels'

const ImagesShower = ({searchTerm}) => {

    const [photos, setPhotos] = useState([])

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
            };
            setPhotos((actualPhotoState) => [...actualPhotoState, photo])
        });
    }

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <ImageList photos={photos} />
    )
}


export default ImagesShower
