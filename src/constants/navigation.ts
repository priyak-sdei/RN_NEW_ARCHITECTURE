export const NAVIGATION = {} as const;
// If any of these names change make sure to change them above
type AuthStackParamList = {
    Login: object;
    Home: object | undefined;
    SignUp: object | undefined;
};

export type StackParamList = Record<
    (typeof NAVIGATION)[keyof typeof NAVIGATION],
    undefined | object
> &
    AuthStackParamList;
