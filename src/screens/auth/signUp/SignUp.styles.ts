import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {COLORS, FONTS, moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    // accountText: {
    //     color: COLORS.BLACK,
    // },
    // forgotContainer: {
    //     alignItems: 'flex-end',
    //     paddingBottom: moderateScale(15),
    //     marginTop: moderateScale(-20),
    // },
    // innerContainer: {
    //     paddingVertical: moderateScale(SPACING.l),
    //     marginTop: moderateScale(SPACING.l),
    //     justifyContent: 'flex-end',
    //     flex: 1,
    // },
    mainContainer: {
        flex: 1,
        padding: moderateScale(10),
        paddingVertical: moderateScale(SPACING.m),
    },
    // logoStyle: {
    //     height: moderateScale(120),
    //     width: moderateScale(120),
    //     alignSelf: 'center',
    //     marginBottom: '20%',
    // },
    // signUpContainer: {
    //     justifyContent: 'center',
    //     paddingBottom: moderateScale(0),
    //     flexDirection: 'row',
    // },
});

export default styles;
