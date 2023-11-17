import {Alert, Platform} from 'react-native';

const alertWithoutPromise = (title = '', message, btn1Text = 'Ok') => {
    Alert.alert(title, message, [{text: btn1Text}], {cancelable: false});
};

const alertWithOneBtn = (title, message, btn1Text) => {
    return new Promise(resolve => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: btn1Text,
                    onPress: () => resolve(false),
                },
            ],
            {cancelable: false},
        );
    });
};

const alertWithTwoBtn = (title, message, btn1Text, btn2Text) => {
    return new Promise(resolve => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: btn1Text,
                    onPress: () => resolve(false),
                },
                {
                    text: btn2Text,
                    onPress: () => resolve(true),
                },
            ],
            {cancelable: false},
        );
    });
};

const alertWithTwoBtnCancel = (title, message, btn1Text, btn2Text) => {
    return new Promise(resolve => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: btn1Text,
                    onPress: () => resolve(false),
                    style: 'cancel',
                },
                {
                    text: btn2Text,
                    onPress: () => resolve(true),
                },
            ],
            {cancelable: false},
        );
    });
};

export {alertWithoutPromise, alertWithTwoBtn, alertWithOneBtn, alertWithTwoBtnCancel};
