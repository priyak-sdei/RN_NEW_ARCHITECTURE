import {useState} from "react";
import {Alert} from "react-native";

export const useAuth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSignInPress = async () => {
        console.log(username, password);
        if (username.trim() === "") {
            Alert.alert("Error");
        } else if (password.trim() === "") {
            Alert.alert("Password Error");
        }
    };

    return {
        username,
        password,
        setUsername,
        setPassword,
        onSignInPress,
    };
};
