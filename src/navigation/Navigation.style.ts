import {StyleSheet} from 'react-native';
import GLOBALS from '@constants/index';
const {FONTS, COLORS} = GLOBALS;

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        flex: 0.2,
    },
    headerItems: {flexDirection: 'row', alignItems: 'center'},
    logoStyle: {width: 30, height: 30, borderRadius: 5, marginRight: 10},
    logoText: {fontFamily: FONTS.NUNITO_BOLD, fontSize: 18},
    bottomContainer: {
        backgroundColor: COLORS.THEME,
        borderRadius: 5,
        marginBottom: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    container: {
        paddingVertical: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menuItem: {
        fontSize: 18,
        fontFamily: FONTS.NUNITO_MEDIUM,
        color: COLORS.THEME,
        paddingRight: 10,
    },
    subMenuContainer: {
        paddingLeft: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        marginVertical: 5,
        marginLeft: 10,
        borderRadius: 5,
    },
    subMenuItem: {
        fontSize: 19,
        fontFamily: FONTS.NUNITO_MEDIUM,
        color: COLORS.THEME,
    },
    subMenuOuterContainer: {
        borderLeftWidth: 1,
        marginLeft: 20,
        borderColor: COLORS.GRAY_LINE,
    },
});
