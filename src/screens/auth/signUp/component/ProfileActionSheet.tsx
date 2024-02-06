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
        id: '',
    },
    {
        title: 'Gallery',
        id: '',
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
    const {payload} = props;
    return (
        <ActionSheet id={props.sheetId} ref={actionSheetRef}>
            <View>
                <FlatList
                    data={actionOptions}
                    key={'id'}
                    renderItem={({item, index}) => {
                        return (
                            <CustomActionOption
                                option={item.title}
                                onPress={() => {
                                    SheetManager.hide(props.sheetId);
                                    onActionOptionSelect('camera');
                                    // if (payload) payload.onOptionSelect('camera');
                                }}
                            />
                        );
                    }}
                />

                <CustomActionOption
                    option={'Gallery'}
                    onPress={() => onActionOptionSelect('gallery')}
                />
            </View>
        </ActionSheet>
    );
};
registerSheet('ProfileActionSheet', ProfileActionSheet);
export default ProfileActionSheet;
