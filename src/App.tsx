/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import {View, StyleSheet} from "react-native";
import {Provider} from "react-redux";
import store from "./redux/store";
import Navigator from "./navigation/Navigator";
import {SheetProvider} from "react-native-actions-sheet";
import "@components/screens/Actionsheets/sheet";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <SheetProvider context="global">
                    <Navigator />
                </SheetProvider>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
