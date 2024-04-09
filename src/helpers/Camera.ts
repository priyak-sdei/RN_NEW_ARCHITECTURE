import * as ImagePicker from 'react-native-image-picker';
import {Asset} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';
import {checkPermission} from './Permission';
import {showToast} from './Utility';
import {strings} from '@localization/Localization';
export const selectImageFromLibrary = (imageOptions): Promise<Asset[]> => {
    return new Promise(resolve => {
        try {
            checkPermission(PERMISSIONS.IOS.PHOTO_LIBRARY).then(isPermission => {
                if (isPermission)
                    ImagePicker.launchImageLibrary(imageOptions, result => {
                        if (result.assets) resolve(result.assets);
                        if (result.errorCode)
                            showToast(result.errorCode, strings.common.error, strings.common.Error);
                    });
            });
        } catch (err) {
            console.warn('Error while requesting camera and microphone permissions:', err);
        }
    });
};

export const selectImageFromCamera = () => {
    return new Promise(resolve => {
        try {
            checkPermission(PERMISSIONS.IOS.CAMERA).then(isPermission => {
                if (isPermission)
                    ImagePicker.launchCamera({mediaType: 'photo'}, result => {
                        if (result.assets) resolve(result.assets);
                        if (result.errorCode) showToast(result.errorCode, 'error', 'Error');
                    });
            });
        } catch (err) {
            console.warn('Error while requesting camera and microphone permissions:', err);
        }
    });
};
