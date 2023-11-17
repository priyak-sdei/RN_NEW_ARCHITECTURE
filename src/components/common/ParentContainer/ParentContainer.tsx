import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Loader } from "../..";
import { styles } from "./ParentContainer.styles";

export const ParentContainer = props => {
    const { isLoading = true, children, style, keyboardAvoidingView, ...attributes } = props;
    return (
        <View style={[styles.parent, style]} {...attributes}>
            {/* statusBar if needed   */}
            {/* <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "default"} /> */}
            {isLoading && <View style={[styles.Loader, style]}>
                <Loader loading={isLoading ? isLoading : false} />
            </View>}
            {keyboardAvoidingView === true
                ? (
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={170}
                        style={styles.keyboardAvoidingContainer}
                    >
                        {children}
                    </KeyboardAvoidingView>
                )
                : (children)}
        </View>
    );
};
