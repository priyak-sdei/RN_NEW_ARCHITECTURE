import {Icon} from '@rneui/themed';
import GLOBAL_THEME from '@theme/index';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
const {COLORS} = GLOBAL_THEME;
import styles from './DateTimePicker.styles';
import {
    CustomButton,
    CustomHeader,
    ParentContainer,
    CustomInput,
    DropDown,
} from '@components/index';
import moment from 'moment';
import {strings} from '@localization/Localization';

interface PickerProps {
    label?: string;
    placeholder?: string;
    onChangeText: (txt) => void; // Callback function prop
    handleBlur?: () => void; // Optional function prop
    // leftIcon?: IconNode;
    // rightIcon?: IconNode;
    errorMessage?: string;
    value: string;
    // editable?: boolean;
    onInputPress?: () => void;
}

const DateTimePicker: React.FC<PickerProps> = props => {
    const {
        label = '',
        placeholder = '',
        onChangeText,
        errorMessage = '',
        value = '',
        handleBlur = () => {},
    } = props;
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    return (
        <View>
            <CustomInput
                label={label}
                onChangeText={() => {}}
                value={value}
                placeholder={placeholder}
                errorMessage={errorMessage}
                editable={false}
                onInputPress={() => setShowPicker(true)}
            />
            <DatePicker
                modal
                open={showPicker}
                date={date}
                onConfirm={date => {
                    handleBlur();
                    setShowPicker(false);
                    setDate(date);
                    onChangeText(moment(date).format('DD/MM/YYYY'));
                }}
                onCancel={() => {
                    setShowPicker(false);
                }}
            />
        </View>
    );
};

export default DateTimePicker;
