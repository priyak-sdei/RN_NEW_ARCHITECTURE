import * as ImagePicker from 'react-native-image-picker';
import {checkPermission} from './Permission';
import {PERMISSIONS} from 'react-native-permissions';
import {showToast} from './Utility';
export const selectImageFromLibrary = async () => {
    return new Promise(async resolve => {
        try {
            let isPermission = await checkPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
            if (isPermission)
                ImagePicker.launchImageLibrary({mediaType: 'photo'}, result => {
                    console.log(result, 'ppppp');
                    if (result.assets) resolve(result.assets);
                    if (result.errorCode) showToast(result.errorCode, 'error', 'Error');
                });
        } catch (err) {
            console.warn('Error while requesting camera and microphone permissions:', err);
        }
    });
};

export const selectImageFromCamera = async () => {
    return new Promise(async resolve => {
        try {
            let isPermission = await checkPermission(PERMISSIONS.IOS.CAMERA);
            if (isPermission)
                ImagePicker.launchCamera({mediaType: 'photo'}, result => {
                    console.log(result, 'ppppp', result.errorCode);
                    if (result.assets) resolve(result.assets);
                    if (result.errorCode) showToast(result.errorCode, 'error', 'Error');
                });
        } catch (err) {
            console.warn('Error while requesting camera and microphone permissions:', err);
        }
    });
};
