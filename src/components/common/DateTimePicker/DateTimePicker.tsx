import {CustomInput} from '@components/index';
import GLOBAL_THEME from '@theme/index';
import moment from 'moment';
import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import DatePicker from 'react-native-date-picker';
const {COLORS} = GLOBAL_THEME;

interface PickerProps {
    label?: string;
    placeholder?: string;
    onChangeText: (txt) => void; // Callback function prop

    // leftIcon?: IconNode;
    // rightIcon?: IconNode;
    errorMessage?: string;
    value: string;
    // editable?: boolean;
    onInputPress?: () => void;
}

const DateTimePicker: React.FC<PickerProps> = props => {
    const {label = '', placeholder = '', onChangeText, errorMessage = '', value = ''} = props;
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    return (
        <View>
            <CustomInput
                label={label}
                value={value}
                placeholder={placeholder}
                errorMessage={errorMessage}
                editable={Platform.OS === 'ios' ? false : true}
                onInputPress={() => {
                    setShowPicker(true);
                }}
            />
            <DatePicker
                modal
                open={showPicker}
                date={date}
                onConfirm={date => {
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
