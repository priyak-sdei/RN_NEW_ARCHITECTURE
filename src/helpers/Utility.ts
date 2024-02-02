import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';

const showToast = (message, type = 'success', title = '') => {
    Toast.show({
        type,
        text1: title,
        text2: message,
        position: 'top',
    });
};

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

//convert object into form data
function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}
export {
    alertWithoutPromise,
    alertWithTwoBtn,
    alertWithOneBtn,
    alertWithTwoBtnCancel,
    getFormData,
    showToast,
};
