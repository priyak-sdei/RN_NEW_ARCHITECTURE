import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;

const styles = StyleSheet.create({
    outer_container: {
        flex: 1,
        padding: moderateScale(15),
    },
    header_container: {
        flexDirection: 'row',
        paddingTop: '8%',
        alignItems: 'center',
    },
    headingTitle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(22),
        padding: moderateScale(5),
        flex: 1,
        marginLeft: moderateScale(15),
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(5),
        borderBottomWidth: moderateScale(0.4),
        borderColor: COLORS.GRAY_LINE,
        paddingVertical: moderateScale(10),
    },
    labelStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(18),
    },
    container: {
        marginTop: moderateScale(20),
    },
});

export default styles;
