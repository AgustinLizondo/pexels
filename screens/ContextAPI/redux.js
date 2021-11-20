import { createStore } from 'redux';
import defaultImage from './defaultImage.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(defaultImage).uri;
const store = createStore();
const changeImage = () => {
    return {
        name: 'CHANGE_IMAGE'
    }
}
const defaultContent = {
    id: 945375,
    photographer: 'Photographer Name',
    photographerURL: null,
    photoSRCM: DEFAULT_IMAGE,
    photoSRCL: DEFAULT_IMAGE,
};
const imageReducer = (state = defaultContent, action) => {
    if (action.name === 'CHANGE_IMAGE') {
        return state
    }
}
const item = {
    "id": 249798,
    "width": 2366,
    "height": 1602,
    "url": "https://www.pexels.com/photo/full-frame-shot-of-abstract-pattern-249798/",
    "photographer": "Sabrina Gelbart",
    "photographer_url": "https://www.pexels.com/@sabrina-gelbart-65954",
    "photographer_id": 65954,
    "avg_color": "#4B443E",
    "src": {
        "original": "https://images.pexels.com/photos/249798/pexels-photo-249798.png",
        "large2x": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false
}
store.dispatch(changeImage());