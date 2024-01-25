import {Icon} from '@rneui/themed';
import GLOBAL_THEME from '@theme/index';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './DropDownPicker.styles';
const {COLORS} = GLOBAL_THEME;
interface DropDownProps {
    label: string;
    options?: dropDownOptions[];
    selectedValue: string;
}
interface dropDownOptions {
    key: string;
    value: number;
}

const DropDownPicker: React.FC<DropDownProps> = props => {
    const {label = '', selectedValue = ''} = props;
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.labelStyle}>{label}</Text>
                <View style={styles.groupContainer}>
                    <Text style={styles.selectedTextStyle}>{selectedValue}selectedValue</Text>
                    <Icon name="arrow-forward-ios" color={COLORS.THEME} type="material" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DropDownPicker;
