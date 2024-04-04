import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {Loader} from '../..';
import {styles} from './ParentContainer.styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const ParentContainer = props => {
    const {
        isLoading = false,
        children,
        style,
        keyboardAvoidingView = false,
        keyboardContentContainerStyle = {},
        ...attributes
    } = props;
    return (
        <View style={[styles.parent, style]} {...attributes}>
            {/* statusBar if needed   */}
            {/* <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "default"} /> */}
            {isLoading && (
                <View style={[styles.Loader, style]}>
                    <Loader loading={isLoading ? isLoading : false} />
                </View>
            )}
            {keyboardAvoidingView === true ? (
                <KeyboardAwareScrollView
                    enableAutomaticScroll={true}
                    contentContainerStyle={[
                        styles.keyboardAvoidingContainer,
                        keyboardContentContainerStyle,
                    ]}>
                    {children}
                </KeyboardAwareScrollView>
            ) : (
                children
            )}
        </View>
    );
};
