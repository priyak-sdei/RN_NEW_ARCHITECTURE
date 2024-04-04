import {StyleSheet} from 'react-native';
import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, horizontalScale, verticalScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    accountText: {
        color: COLORS.BLACK,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        marginBottom: moderateScale(SPACING.s),
        marginTop: verticalScale(-SPACING.s),
        paddingHorizontal: horizontalScale(SPACING.s),
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: verticalScale(SPACING.l),
    },
    logoStyle: {
        alignSelf: 'center',
        backgroundColor: COLORS.ERROR_RED,
        height: moderateScale(120),
        marginBottom: '10%',
        marginVertical: '10%',
        width: moderateScale(120),
    },
    mainContainer: {
        flex: 1,
    },
    outerContainer: {
        flex: 1,
        padding: moderateScale(SPACING.xs),
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: verticalScale(SPACING.xs),
    },
});

export default styles;
