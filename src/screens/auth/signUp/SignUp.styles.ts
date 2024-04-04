import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    horizontalContainer: {
        flexDirection: 'row',
    },
    mainContainer: {
        padding: moderateScale(10),
        paddingVertical: moderateScale(SPACING.m),
    },
    outerContainer: {
        flex: 1,
    },
});

export default styles;
