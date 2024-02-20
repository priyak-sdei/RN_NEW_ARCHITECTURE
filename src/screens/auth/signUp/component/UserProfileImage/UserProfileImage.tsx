import {UserProfile} from "@components/index";
import React from "react";
import {View} from "react-native";
import {SheetManager} from "react-native-actions-sheet";

interface UserProfileImageProps {
    image_url: string;
    default_txt?: string;
    onActionOptionSelect: (type: string) => void;
}

const UserProfileImage: React.FC<UserProfileImageProps> = props => {
    const {image_url, onActionOptionSelect, default_txt = "PP"} = props;
    return (
        <View>
            <UserProfile
                default_txt={default_txt}
                image_url={image_url}
                onBtnPress={() => {
                    SheetManager.show("ProfileActionSheet", {
                        payload: {
                            onOptionSelect: async (type: string) => {
                                await SheetManager.hide("ProfileActionSheet");
                                onActionOptionSelect(type);
                            },
                        },
                    });
                }}
            />
        </View>
    );
};

export default UserProfileImage;
