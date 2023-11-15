import GLOBAL_THEME from "@theme/index";
import React from "react";
import {ActivityIndicator, Modal, View} from "react-native";
import {styles} from "./Loader.styles";
const {COLORS} = GLOBAL_THEME;
export const Loader = props => {
    const {loading} = props;
    return (
        <Modal transparent={true} animationType={"none"} visible={loading} statusBarTranslucent>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        size="large"
                        animating={loading}
                        color={COLORS.WHITE}
                        style={styles.activityIndicator}
                    />
                </View>
            </View>
        </Modal>
    );
};
