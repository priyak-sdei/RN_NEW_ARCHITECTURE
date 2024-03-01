import {CustomButton} from '@components/index';
import {strings} from '@localization/Localization';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './ErrorBoundary.styles';
const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Event listenerr1');
        const handleErrors = (error, errorInfo) => {
            setHasError(true);
            setError(error);
        };

        // Attach the error event listener
        // const errorListener = event => {
        //     console.log('Event listenerr');
        //     handleErrors(event.error, event.errorInfo);
        // };

        // Set up the error event listener
        global.ErrorUtils.setGlobalHandler(handleErrors);

        // Remove the error event listener when the component unmounts
        return () => {
            global.ErrorUtils.setGlobalHandler(null);
        };
    }, []); // Empty dependency array ensures that this effect runs only once

    if (hasError) {
        // You can customize the fallback UI further
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{
                            uri: 'https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png',
                        }}
                        style={styles.imgStyle}
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Text style={styles.headingError}>Something went wrong !!!</Text>

                    {/* Display additional information about the error if needed */}
                    <Text style={styles.errorText}>
                        <Text style={styles.errorTextHighlight}>Error:</Text>{' '}
                        {error && error.toString()}
                    </Text>

                    <CustomButton
                        title={strings.common.tryAgain}
                        onBtnPress={() => setHasError(false)}
                    />
                </View>
            </View>
        );
    }

    // If no error occurred, render the children
    return children;
};

export default ErrorBoundary;
