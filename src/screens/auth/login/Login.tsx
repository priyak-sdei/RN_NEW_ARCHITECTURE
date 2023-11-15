import {CustomHeader, ParentContainer} from "@components/index";

import {strings} from "@localization/Localization";
import GLOBAL_THEME from "@theme/index";
import React from "react";
import {View} from "react-native";
const {COLORS, FONTS} = GLOBAL_THEME;
function Login(props): JSX.Element {
    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signIn} />
        </ParentContainer>
    );
}

export default Login;
