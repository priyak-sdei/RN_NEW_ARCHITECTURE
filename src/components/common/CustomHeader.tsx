import {Header} from '@rneui/base';
import * as React from 'react';
import GLOBALS from '@constants/index';
import {Icon} from '@rneui/themed';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
const {FONTS, COLORS} = GLOBALS;
/**
Type Safety: Interfaces help provide type safety in your code. TypeScript will check that objects you pass
to your components match the expected structure defined in the interface.
This can catch type-related errors at compile time, which can be very helpful in preventing runtime errors.
Interfaces in TypeScript are a powerful tool for ensuring the consistency
and correctness of data structures and can be particularly useful when working with 
React Native to maintain clean and well-typed code.
 */
interface MyComponentProps {
    headerTitle: string;
    showBack: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode[]; //show support for multiple icons
    onBackPress?: () => void; // Callback function prop
    onRightIconPress?: () => void; // Callback function prop
    onLeftIconPress?: () => void;
}

const CustomHeader: React.FC<MyComponentProps> = props => {
    let {
        headerTitle = '',
        showBack = false,
        onBackPress,
        onRightIconPress,
        onLeftIconPress,
        leftIcon,
        rightIcon,
    } = props;
    return (
        <Header
            containerStyle={styles.headerContainer}
            centerComponent={{
                text: headerTitle,
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

export default CustomHeader;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.THEME,
    },
    headingTitle: {
        color: COLORS.WHITE,
        fontSize: 22,
        fontFamily: FONTS.SEMI_BOLD,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    leftMargin: {
        marginLeft: 10,
    },
    centerText: {
        justifyContent: 'center',
    },
});

/**
 * By using React.FC, you get the benefit of TypeScript's type inference for props,
 *  which can help catch type-related errors early in development.
 *  It also makes it clear that MyComponent is a functional component, making your code more self-documenting.
 */
