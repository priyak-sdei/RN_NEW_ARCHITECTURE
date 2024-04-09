import {moderateScale, verticalScale} from '@theme/common';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: moderateScale(10),
        flex: 1,
        height: verticalScale(150),
        width: '100%',
    },
    listElementContainer: {
        padding: moderateScale(10),
        width: '100%',
    },
    mainContainer: {
        flex: 1,
    },
});

export default styles;
