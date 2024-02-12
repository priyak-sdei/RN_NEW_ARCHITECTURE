import messaging from '@react-native-firebase/messaging';

export const requestUserNotificationPermission = async () => {
    try {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        console.log(enabled, 'enabled status');
        if (enabled) {
            console.log('Authorization status:', authStatus);
            try {
                const token = await messaging().getToken();
                console.log(token, 'token.....');
            } catch (err) {
                console.error('Error in geting token', err);
            }
        }
    } catch (err) {
        console.error('Error in push notification', err);
    }

    messaging().onMessage(notification => {
        console.log('onMessage notification', JSON.stringify(notification));
        console.log('notification?.sentTime', notification);
    });

    // Set up background message handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
        // You can handle the incoming message in the background here
    });
};
