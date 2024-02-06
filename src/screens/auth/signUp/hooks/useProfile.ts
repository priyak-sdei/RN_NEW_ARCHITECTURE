import {useCreateUserMutation} from '@/redux/api/userAPIs/userAPI';
import {showToast} from '@helpers/Utility';
import {useEffect} from 'react';
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
        console.log(type, 'values......');
    };

    return {
        onActionOptionSelect,
    };
};
