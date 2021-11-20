import React, { createContext, useState } from 'react';
import { View, Image } from 'react-native';
import defaultImage from './defaultImage.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(defaultImage).uri;
const MyProvider = ({ children }) => {

    const defaultContent = {
        id: 945375,
        photographer: 'Photographer Name',
        photographerURL: null,
        photoSRCM: DEFAULT_IMAGE,
        photoSRCL: DEFAULT_IMAGE,
    };
    const [state, setState] = useState(defaultContent);
    return (
        <View>
            <AppContext.Provider value={[state, setState]}>
                {children}
            </AppContext.Provider>
        </View>
    )
}

export default MyProvider;
export const AppContext = createContext();