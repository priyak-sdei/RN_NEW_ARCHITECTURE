import {selectImageFromCamera, selectImageFromLibrary} from "@helpers/Camera";
import {useState} from "react";
import {Asset} from "react-native-image-picker";
export const useProfile = ({setUserProfileImage}) => {
    const [userProfileImg, setProfileImg] = useState<Asset>({});

    const chooseImageFromLibrary = async () => {
        const imageResult: Asset[] = await selectImageFromLibrary();
        console.log(imageResult, "imageResult");
        setUserProfileImage(imageResult[0].uri);
        setProfileImg(imageResult[0]);
    };

    const onActionOptionSelect = async type => {
        try {
            if (type === 1) await selectImageFromCamera();
            else await chooseImageFromLibrary();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return {
        onActionOptionSelect,
        profileImg: userProfileImg?.uri ? userProfileImg?.uri : "",
    };
};
