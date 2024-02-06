import {IMAGES} from '@assets/images/index';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BorderSeparator} from '@components/index';
import {styles} from './CustomActionOption.styles';
interface ActionOptionsProps {
    option: string;
    onPress?: () => void;
    showDivider?: boolean;
    isDelete?: boolean;
}
const CustomActionOption: React.FC<ActionOptionsProps> = props => {
    const {option, onPress, showDivider = true, isDelete = false} = props;
    return (
        <>
            <View style={{}}>
                <TouchableOpacity style={styles.menuItemContainer} onPress={onPress}>
                    <Image
                        source={IMAGES.bell}
                        style={[styles.menuIcon, isDelete && styles.deleteIcon]}
                        resizeMode="contain"
                    />
                    <Text style={[styles.menuText, isDelete && styles.deleteText]}>{option}</Text>
                </TouchableOpacity>
            </View>
            {showDivider && <BorderSeparator style={styles.menuSeparator} />}
        </>
    );
};
export default CustomActionOption;
