import {useCreateUserMutation} from '@/redux/api/userAPIs/userAPI';
import {showToast} from '@helpers/Utility';
import {useEffect} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {selectImageFromLibrary, selectImageFromCamera} from '@helpers/Camera';
interface ErrorResponse {
    data?: {
        error?: string;
    };
}

export const useProfile = () => {
    useEffect(() => {
        console.log('UseProfile Hook');
    }, []);

    const onActionOptionSelect = async type => {
        try {
            if (type == 1) await selectImageFromCamera();
            else await selectImageFromLibrary();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return {
        onActionOptionSelect,
    };
};
