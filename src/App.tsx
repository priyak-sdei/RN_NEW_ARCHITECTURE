/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import Navigator from './navigation/Navigator';
import {SheetProvider} from 'react-native-actions-sheet';
import '@components/screens/Actionsheets/sheet';
import {requestUserNotificationPermission} from '@helpers/Notification';
import {handleDatabase} from './utils/FirebaseDB';
import {appDB} from './utils//sqliteDb';
requestUserNotificationPermission();
// handleDatabase();
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
//appDB();

const ErrorFallback = ({error, resetErrorBoundary}) => (
    <View>
        <Text>Something went wrong!</Text>
        <Button onPress={resetErrorBoundary} title="Try again" />
    </View>
);
function App(): JSX.Element {
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary>
                    <View style={styles.container}>
                        <SheetProvider context="global">
                            <Navigator />
                        </SheetProvider>
                    </View>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
