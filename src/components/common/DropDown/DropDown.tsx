import {Icon} from '@rneui/themed';
import GLOBAL_THEME from '@theme/index';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DropDownPicker from '../DropDownPicker/DropDownPicker';
import styles from './Dropdown.styles';
const {COLORS} = GLOBAL_THEME;
interface DropDownProps {
    label: string;
    options?: dropDownOptions[];
    selectedValue: string;
    onOptionSelect: (data: dropDownOptions) => void;
    errorMessage?: string;
    multiSelection?: boolean;
}
interface dropDownOptions {
    key: string;
    value: string;
    _id?: string;
    state?: string;
}

const DropDown: React.FC<DropDownProps> = props => {
    const {
        label = '',
        onOptionSelect,
        options = [],
        errorMessage = '',
        multiSelection = false,
    } = props;
    const [showOptions, setShowOptions] = useState(false);
    const [selectedItem, setSelectedItem] = useState({} as {value: string});
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => setShowOptions(true)}>
                <View style={styles.innerContainer}>
                    <Text style={styles.labelStyle}>{label}</Text>
                    <View style={styles.groupContainer}>
                        <Text style={styles.selectedTextStyle}>{selectedItem.value}</Text>
                        <Icon
                            name="arrow-forward-ios"
                            size={20}
                            color={COLORS.THEME}
                            type="material"
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={styles.errorStyle}>{errorMessage}</Text>

            <DropDownPicker
                multiSelection={multiSelection}
                options={options}
                selectedOption={selectedItem.value}
                showPicker={showOptions}
                hideModal={() => {
                    setShowOptions(false);
                }}
                onItemSelected={item => {
                    setSelectedItem(item);
                    onOptionSelect(item);
                }}
            />
        </View>
    );
};

export default DropDown;
