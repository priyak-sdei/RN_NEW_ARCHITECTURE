import {AppleRequestResponseFullName} from '@invertase/react-native-apple-authentication';

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
