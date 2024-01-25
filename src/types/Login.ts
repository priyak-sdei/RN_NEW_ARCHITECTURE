import {AppleRequestResponseFullName} from '@invertase/react-native-apple-authentication';
import {IconNode, Input} from '@rneui/base';
export interface AppleAuthRequestResponse {
    email: string;
    fullName: AppleRequestResponseFullName;
}

export interface DecodedToken {
    iss: string;
    aud: string;
    exp: number;
    iat: number;
    sub: string;
    nonce: string;
    c_hash: string;
    email: string;
    email_verified: boolean;
    auth_time: number;
    nonce_supported: boolean;
}

export interface SignUpFormValues {
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    picture: string;
}

export interface CustomInputProp {
    label?: string;
    placeholder?: string;
    onChangeText: (txt) => void; // Callback function prop
    leftIcon?: IconNode;
    rightIcon?: IconNode;
    errorMessage?: string;
    value: string;
}
