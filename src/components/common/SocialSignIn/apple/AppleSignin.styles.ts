import GLOBAL_THEME from '@theme/index';
import {StyleSheet} from 'react-native';
const {moderateScale} = GLOBAL_THEME;
export const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        height: moderateScale(45),
        borderRadius: moderateScale(15),
    },
});
