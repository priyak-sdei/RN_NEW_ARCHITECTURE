export const NAVIGATION = {} as const;
// If any of these names change make sure to change them above
type AuthStackParamList = {
    Login: {};
    Home: {} | undefined;
    SignUp: {} | undefined;
};

export type StackParamList = Record<
    (typeof NAVIGATION)[keyof typeof NAVIGATION],
    undefined | object
> &
    AuthStackParamList;
