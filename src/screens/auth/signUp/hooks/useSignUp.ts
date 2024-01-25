export const useSignUp = () => {
    const onSignUpPress = values => {
        console.log(values, 'values......');
    };

    return {
        onSignUpPress,
    };
};
