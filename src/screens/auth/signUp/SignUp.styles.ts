import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(10),
        paddingVertical: moderateScale(SPACING.m),
    },
});

export default styles;
