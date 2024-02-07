import {CustomActionOption} from '@components/index';
import React, {useRef} from 'react';
import {View, FlatList} from 'react-native';
import ActionSheet, {
    SheetDefinition,
    SheetManager,
    SheetProps,
    registerSheet,
} from 'react-native-actions-sheet';
import {useProfile} from '../hooks/useProfile';
const actionOptions = [
    {
        title: 'Camera',
        id: 1,
    },
    {
        title: 'Gallery',
        id: 2,
    },
];
declare module 'react-native-actions-sheet' {
    interface Sheets {
        ProfileActionSheet: SheetDefinition<{
            payload: {
                value?: string;
                onOptionSelect: (type: string) => void | undefined;
            };
            sheetId?: string;
        }>;
    }
}

const ProfileActionSheet: React.FC<SheetProps<'ProfileActionSheet'>> = props => {
    console.log(props, 'props..');
    const {onActionOptionSelect} = useProfile();
    const actionSheetRef = useRef(null);

    const renderItem = ({item}: {item: any}) => (
        <CustomActionOption
            option={item.title}
            onPress={async () => {
                await SheetManager.hide(props.sheetId);
                onActionOptionSelect(item.id);
                // setTimeout(() => {
                //     onActionOptionSelect('camera');
                // }, 1000);
            }}
        />
    );
    return (
        <ActionSheet id={props.sheetId} ref={actionSheetRef}>
            <View>
                <FlatList data={actionOptions} key={'id'} renderItem={renderItem} />
            </View>
        </ActionSheet>
    );
};
registerSheet('ProfileActionSheet', ProfileActionSheet);
export default ProfileActionSheet;
