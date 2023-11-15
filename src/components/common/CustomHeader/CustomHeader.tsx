import {Header} from "@rneui/base";
import {Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Image, Text, View, TouchableOpacity} from "react-native";
import {styles} from "./CustomHeader.styles";
import GLOBAL_THEME from "@theme/index";
const {COLORS} = GLOBAL_THEME;
interface MyComponentProps {
    title: string;
    showBack?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode[]; //show support for multiple icons
    onRightIconPress?: () => void; // Callback function prop
    onLeftIconPress?: () => void;
}

export const CustomHeader: React.FC<MyComponentProps> = props => {
    const {
        title = "",
        showBack = false,
        onRightIconPress,
        onLeftIconPress,
        leftIcon,
        rightIcon,
    } = props;
    const navigation = useNavigation();
    const onBackPress = () => navigation.goBack();

    return (
        <Header
            containerStyle={styles.headerContainer}
            centerComponent={{
                text: title,
                style: styles.headingTitle,
            }}
            leftComponent={
                <View style={styles.headerRight}>
                    {showBack && (
                        <TouchableOpacity onPress={onBackPress}>
                            <Icon name="arrow-back-ios" color={COLORS.WHITE} type="material" />
                        </TouchableOpacity>
                    )}

                    {leftIcon && (
                        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftMargin}>
                            {leftIcon}
                        </TouchableOpacity>
                    )}
                </View>
            }
            rightComponent={
                <View style={styles.headerRight}>
                    {rightIcon &&
                        rightIcon.map((element, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={onRightIconPress}
                                    style={styles.leftMargin}>
                                    {element}
                                </TouchableOpacity>
                            );
                        })}
                </View>
            }
            centerContainerStyle={styles.centerText}
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="center"
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};
