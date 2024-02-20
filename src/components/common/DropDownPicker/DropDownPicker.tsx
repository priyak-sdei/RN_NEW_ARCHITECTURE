import {Icon} from "@rneui/themed";
import GLOBAL_THEME from "@theme/index";
import React from "react";
import {FlatList, Modal, Text, TouchableOpacity, View} from "react-native";
import styles from "./DropDownPicker.styles";
const {COLORS} = GLOBAL_THEME;
interface DropDownProps {
    showPicker: boolean;
    hideModal: () => void;
    onItemSelected: (data: dropDownOptions) => void;
    options: dropDownOptions[];
    selectedOption: string;
}
interface dropDownOptions {
    key: string;
    value: string;
}

const DropDownPicker: React.FC<DropDownProps> = props => {
    const {
        showPicker = false,
        hideModal,
        options = [],
        selectedOption = {},
        onItemSelected,
    } = props;

    const renderItem = ({item}: {item: dropDownOptions}) => (
        <TouchableOpacity style={styles.listContainer} onPress={() => onItemSelected(item)}>
            <Text style={styles.labelStyle}>{item.key}</Text>
            {selectedOption && selectedOption === item.key && (
                <Icon name="checkmark-sharp" size={25} color={COLORS.BLACK} type="ionicon" />
            )}
        </TouchableOpacity>
    );

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={showPicker}
            onRequestClose={() => hideModal()}>
            <View style={styles.outer_container}>
                <TouchableOpacity style={styles.header_container} onPress={() => hideModal()}>
                    <Icon name="arrow-back-ios" size={25} color={COLORS.BLACK} type="material" />
                    <Text style={styles.headingTitle}>Select Value</Text>
                </TouchableOpacity>

                <View style={styles.container}>
                    <FlatList data={options} renderItem={renderItem} numColumns={1} />
                </View>
            </View>
        </Modal>
    );
};

export default DropDownPicker;
