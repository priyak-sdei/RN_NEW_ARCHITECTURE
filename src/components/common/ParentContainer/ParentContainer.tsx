import React from "react";
import {Platform, StatusBar, View} from "react-native";
import {Loader} from "../..";
import {styles} from "./ParentContainer.styles";

export const ParentContainer = props => {
    const {isLoading, children, style, ...attributes} = props;

    return (
        <View style={[styles.parent, style]} {...attributes}>
            <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "default"} />
            <View style={[styles.parent, style]}>
                <Loader loading={isLoading ? isLoading : false} />
                {children}
            </View>
        </View>
    );
};
