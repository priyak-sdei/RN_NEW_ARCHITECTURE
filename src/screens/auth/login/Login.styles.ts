import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {COLORS, FONTS, moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    accountText: {
        color: COLORS.BLACK,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        marginTop: moderateScale(-20),
        paddingBottom: moderateScale(15),
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: moderateScale(SPACING.l),
    },
    logoStyle: {
        backgroundColor: 'red',
        alignSelf: 'center',
        height: moderateScale(120),
        marginBottom: '10%',
        marginVertical: '10%',
        width: moderateScale(120),
    },
    mainContainer: {
        flex: 1,
        padding: moderateScale(10),
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: moderateScale(10),
    },
});

export default styles;
