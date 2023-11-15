/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import GLOBAL_THEME from "@theme/index";
import React, {useEffect, useState} from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "src/redux/slices/userSlice";
const {COLORS} = GLOBAL_THEME;
// import CustomHeader from '@components/common/CustomHeader';
import {
    useDeleteRequestMutation,
    useLazyGetTodoQuery,
    useLazyPatchRequestQuery,
    usePostDataMutation,
} from "src/redux/service/GetFakeData";
import styles from "./Profile.style";

type requestBodyType = {
    userId: number;
    title: string;
    body: string;
};

const requestBody: requestBodyType = {
    title: "foo",
    body: "bar",
    userId: 0,
};
function Profile(props): JSX.Element {
    const dispatch = useDispatch();
    const {message} = useSelector((state: any) => state.user);
    const [isLoading, setIsLoading] = useState(true);
    const id = 4; // pass through params
    const [getData] = useLazyGetTodoQuery();
    const [postData] = usePostDataMutation();
    const [updateData] = useLazyPatchRequestQuery();
    const [deleteData] = useDeleteRequestMutation();

    const getTodoData = async () => {
        try {
            const response = await getData(id);
            setIsLoading(false);
            console.log("Response ----->", response);
        } catch (error) {
            console.log("Error ----->", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTodoData();
        dispatch(setMessage("Update...."));
    }, []);
    useEffect(() => {
        console.log(message, "UpdateMessageee...");
    }, [message]);

    const callPostApi = async () => {
        try {
            const resp = await postData(requestBody).unwrap();
            console.log("Post Api RESPONSE ", resp);
        } catch (error) {
            console.log("Post api Error", error);
        }
    };
    const callPatchApi = async () => {
        const args = {
            id: 4,
            body: requestBody,
        };
        try {
            const resp = await updateData(args).unwrap();
            console.log("Patch Api RESPONSE", resp);
        } catch (error) {
            console.log("Patch api Error", error);
        }
    };

    const callDeleteApi = async () => {
        try {
            const resp = await deleteData(id).unwrap();
            console.log("Delete Api RESPONSE", resp);
        } catch (error) {
            console.log("Delete api Error", error);
        }
    };

    return (
        <View style={styles.mainContainer}>
            {/* <CustomHeader
                onRightIconPress={() => console.log('right click')}
                onLeftIconPress={() => props.navigation.openDrawer()}
                headerTitle={'Profile'}
                showBack={false}
                leftIcon={<Icon name="menu" color={COLORS.WHITE} type="ionicon" />}
                rightIcon={[<Icon key={1} name="logout" color={COLORS.WHITE} type="material" />]}
            /> */}
            {isLoading ? (
                <ActivityIndicator
                    size={"large"}
                    color={COLORS.THEME}
                    style={styles.activityIndicator}
                />
            ) : (
                <Text>Welcome to Profile page</Text>
            )}
        </View>
    );
}

export default Profile;
