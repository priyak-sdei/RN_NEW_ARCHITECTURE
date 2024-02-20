import {CustomActionOption} from "@components/index";
import React, {useRef} from "react";
import {FlatList, View} from "react-native";
import ActionSheet, {SheetDefinition, SheetProps} from "react-native-actions-sheet";

const actionOptions = [
    {
        title: "Camera",
        id: 1,
    },
    {
        title: "Gallery",
        id: 2,
    },
];
declare module "react-native-actions-sheet" {
    interface Sheets {
        ProfileActionSheet: SheetDefinition<{
            payload: {
                value?: string;
                onOptionSelect: (type: string) => void | undefined | Promise<void>;
            };
            sheetId?: string;
        }>;
    }
}

const ProfileActionSheet: React.FC<SheetProps<"ProfileActionSheet">> = props => {
    const actionSheetRef = useRef(null);

    const renderItem = ({item}: {item: any}) => (
        <CustomActionOption
            option={item.title}
            onPress={async () => {
                props.payload?.onOptionSelect(item.id);
            }}
        />
    );
    return (
        <ActionSheet id={props.sheetId} ref={actionSheetRef}>
            <View>
                <FlatList data={actionOptions} key={"id"} renderItem={renderItem} />
            </View>
        </ActionSheet>
    );
};
export default ProfileActionSheet;
