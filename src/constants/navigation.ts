export const NAVIGATION = {} as const;
// If any of these names change make sure to change them above
type AuthStackParamList = {
    Login: object | undefined;
    Home: object | undefined;
    SignUp: object | undefined;
    ForgotPassword: object | undefined;
};

export type StackParamList = Record<
    (typeof NAVIGATION)[keyof typeof NAVIGATION],
    undefined | object
> &
    AuthStackParamList;
