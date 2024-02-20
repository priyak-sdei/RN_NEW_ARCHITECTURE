import {
    AppleButton,
    AppleRequestResponse,
    appleAuth,
} from "@invertase/react-native-apple-authentication";
import {moderateScale} from "@theme/common";
import {AppleAuthRequestResponse, DecodedToken} from "@type/index";
import {jwtDecode} from "jwt-decode";
import React, {useEffect} from "react";
import {Platform, View} from "react-native";
import {styles} from "./AppleSignin.styles";

interface AppleSignInProps {
    onSignInSuccess: (userInfo: AppleAuthRequestResponse) => void;
}

const AppleSignIn: React.FC<AppleSignInProps> = ({onSignInSuccess}) => {
    useEffect(() => {
        // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
        return appleAuth.onCredentialRevoked(async () => {
            console.warn("If this function executes, User Credentials have been Revoked");
        });
    }, []);

    async function signIn() {
        const appleAuthRequestResponse: AppleRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });
        console.log(appleAuthRequestResponse, "appleAuthRequestResponse....");

        const decodedToken: DecodedToken = jwtDecode(appleAuthRequestResponse.identityToken!);
        const data: AppleAuthRequestResponse = {
            email: decodedToken.email,
            fullName: appleAuthRequestResponse.fullName!,
        };

        const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user,
        );
        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            onSignInSuccess(data);
        }
    }
    return (
        <View>
            {Platform.OS === "ios" && (
                <AppleButton
                    buttonStyle={AppleButton.Style.BLACK}
                    buttonType={AppleButton.Type.SIGN_IN}
                    cornerRadius={moderateScale(7)}
                    style={styles.buttonStyle}
                    onPress={signIn}
                />
            )}
        </View>
    );
};

export default AppleSignIn;
