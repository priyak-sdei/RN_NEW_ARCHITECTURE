import {Platform} from "react-native";
import {
    check,
    PERMISSIONS,
    requestMultiple,
    RESULTS,
    request,
    openSettings,
    checkMultiple,
    Permission,
} from "react-native-permissions";
import {strings} from "@localization/Localization";
import {alertWithTwoBtn} from "./Utility";
export const checkCameraAndMicrophonePermissions = async () => {
    return new Promise(resolve => {
        try {
            if (Platform.OS === "ios") {
                checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE]).then(
                    statuses => {
                        console.log(statuses, "statuses");
                        if (
                            statuses[PERMISSIONS.IOS.MICROPHONE] === RESULTS.GRANTED &&
                            statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED
                        )
                            resolve(true);
                        else if (
                            /**Check if permission blocked retun false show alert */
                            statuses[PERMISSIONS.IOS.MICROPHONE] === RESULTS.BLOCKED ||
                            statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED
                        )
                            showPermissionErrorAlert();
                        else if (
                            /**Check if permission Denied retun false and request again */
                            statuses[PERMISSIONS.IOS.MICROPHONE] === RESULTS.DENIED ||
                            statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.DENIED
                        ) {
                            requestMultiple([
                                PERMISSIONS.IOS.CAMERA,
                                PERMISSIONS.IOS.MICROPHONE,
                            ]).then(result => {
                                if (
                                    result[PERMISSIONS.IOS.MICROPHONE] === RESULTS.BLOCKED ||
                                    result[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED
                                )
                                    showPermissionErrorAlert();
                            });
                        }
                    },
                );
            }
        } catch (err) {
            console.warn("Error while requesting camera and microphone permissions:", err);
        }
    });
};

export const checkPermission = (permission: Permission): Promise<boolean> => {
    return new Promise(resolve => {
        try {
            if (Platform.OS === "ios" || Platform.OS === "android") {
                check(permission).then(status => {
                    console.log(status, "statuses", permission);
                    if (status === RESULTS.GRANTED) resolve(true);
                    else if (status === RESULTS.DENIED) {
                        request(permission).then(result => {
                            if (result === RESULTS.GRANTED) resolve(true);
                            else showPermissionErrorAlert();
                        });
                    } else showPermissionErrorAlert();
                });
            }
        } catch (err) {
            console.warn("Error while requesting camera permissions:", err);
        }
    });
};
const openSetting = () => {
    openSettings().catch(() => console.warn("cannot open settings"));
};

const showPermissionErrorAlert = () => {
    alertWithTwoBtn(
        strings.permission_text.permission_error,
        strings.permission_text.micro_camera_denied,
        "Not Now",
        "Open Settings",
    ).then(res => {
        if (res) openSetting();
    });
};
