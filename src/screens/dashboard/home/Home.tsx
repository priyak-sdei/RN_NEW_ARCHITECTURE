/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View, NativeModules, Alert } from 'react-native';
import CustomButton from '@components/common/CustomButton';
import styles from '@screens/dashboard/home/Home.style';
const buttonsTitle = [
    {
        id: 1,
        title: "Simple Function"
    },
    {
        id: 2,
        title: "Function With Callback"
    },
    {
        id: 3,

        title: "Function With Arguments"
    },
    {
        id: 4,
        title: "Function With Promise"
    },
]
function Home(props): JSX.Element {
    const { CustomModule } = NativeModules

    const onButtonClick = async (index: number) => {
        if (index === 0) {
            CustomModule.simpleMethod();
        }
        else if (index === 1) {
            CustomModule.simpleMethodReturns((result:any) => {
                Alert.alert(result)
            })
        } else if (index === 2) {
            CustomModule.simpleMethodWithParams(
                'User',
                (result:any) => {
                    Alert.alert(result)
                }
            )
        }
        else {
            const result = await CustomModule.resolvePromise();
            Alert.alert(result)
        }
    }
    useEffect(() => {
        //  props.navigation.openDrawer();
        return () => { };
    }, []);

    return (
        <View style={styles.container}>
            {buttonsTitle.map((item, index) => (
                <View style={styles.buttonContainer} key={index}>
                    <CustomButton onClick={() => onButtonClick(index)} label={item.title} />
                </View>
            ))}
         <CustomButton onClick={() => CustomModule.NativeView()} label={'Go in Native Screen'} />
        </View>
    );
}



export default Home;
