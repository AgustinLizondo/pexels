import React, { createContext, useState } from 'react';
import { View, Image } from 'react-native';
import defaultImage from './defaultImage.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(defaultImage).uri;
export const DataContext = createContext();

const defaultContent = {
    id: 945375,
    photographer: 'Photographer Name',
    photographerURL: null,
    photoSRCM: DEFAULT_IMAGE,
    photoSRCL: DEFAULT_IMAGE,
};

const DataProvider = ({ children }) => {

    const [detailedImage, setDetailedImage] = useState(defaultContent);
    const [searchTerm, setSearchTerm] = useState('programming');

    return (
        <DataContext.Provider value={{detailedImage, setDetailedImage, searchTerm, setSearchTerm}}>
             {children}
        </DataContext.Provider>
    )
}

export default DataProvider;