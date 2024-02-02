import {useCreateUserMutation} from '@/redux/api/userAPIs/userAPI';
import {showToast} from '@helpers/Utility';
import {useEffect} from 'react';
interface ErrorResponse {
    data?: {
        error?: string;
    };
}

export const useSignUp = () => {
    const [createUser, {isLoading, error: createUserError, isSuccess, data, status}] =
        useCreateUserMutation();

    useEffect(() => {
        if (!isLoading && createUserError) {
            if ('data' in createUserError && createUserError.data) {
                const errorResponse = createUserError.data as ErrorResponse;
                if (errorResponse && 'error' in errorResponse) {
                    showToast(errorResponse?.error, 'error');
                }
            }
        }
        console.log(createUserError, 'createUserError...');
    }, [isLoading, createUserError]);

    useEffect(() => {
        console.log(isSuccess, 'isSuccess...', data, status);
        if (!isLoading && isSuccess) {
            showToast('User created succesfully');
        }
    }, [isSuccess]);

    const onSignUpPress = async values => {
        console.log(values, 'values......');
        await createUser(values);
    };

    return {
        onSignUpPress,
    };
};
