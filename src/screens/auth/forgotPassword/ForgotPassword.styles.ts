import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {COLORS, FONTS, moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    logoStyle: {
        alignSelf: 'center',
        backgroundColor: COLORS.ERROR_RED,
        height: moderateScale(120),
        marginBottom: '10%',
        marginVertical: '10%',
        width: moderateScale(120),
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: moderateScale(20),
    },
});

export default styles;
