import crashlytics from "@react-native-firebase/crashlytics";

export function logCrash(msg: string): void {
    crashlytics().log(msg);
}
interface MyObject {
    [key: string]: string;
}

export function logAttributes(param: MyObject): void {
    crashlytics().setAttributes(param);
}

export function myFunction(): void {
    crashlytics().crash();
}
