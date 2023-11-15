import {CustomHeader, ParentContainer} from "@components/index";
import {strings} from "@localization/Localization";
import React from "react";

function Login(props): JSX.Element {
    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signIn} />
        </ParentContainer>
    );
}

export default Login;
