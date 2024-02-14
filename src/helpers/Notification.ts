import messaging from "@react-native-firebase/messaging";
import {Platform} from "react-native";
import {PERMISSIONS} from "react-native-permissions";
import {checkPermission} from "./Permission";

const getToken = async () => {
    try {
        const token = await messaging().getToken();
        console.log(token, "token.....");
    } catch (err) {
        console.error("Error in geting token", err);
    }
};

export const requestUserNotificationPermission = async () => {
    try {
        if (Platform.OS === "ios") {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
            console.log(enabled, "enabled status");
            if (enabled) {
                console.log("Authorization status:", authStatus);
                getToken();
            }
        } else {
            const androidPermissionStatus = await checkPermission(
                PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
            );
            if (androidPermissionStatus) {
                getToken();
            }
        }
    } catch (err) {
        console.error("Error in push notification", err);
    }

    messaging().onMessage(notification => {
        console.log("onMessage notification", JSON.stringify(notification));
        console.log("notification?.sentTime", notification);
    });

    // Set up background message handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log("Message handled in the background!", remoteMessage);
        // You can handle the incoming message in the background here
    });
};
