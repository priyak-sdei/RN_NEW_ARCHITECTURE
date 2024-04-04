import GLOBAL_THEME from '@theme/index';
import {StyleSheet} from 'react-native';
const {COLORS, moderateScale, verticalScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
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
});

export default styles;
