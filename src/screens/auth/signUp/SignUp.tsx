import {
    CustomButton,
    CustomHeader,
    CustomInput,
    DateTimePicker,
    DropDown,
    ParentContainer,
} from "@components/index";
import GLOBALS from "@constants/index";
import {strings} from "@localization/Localization";
import React from "react";
import {View} from "react-native";
import styles from "./SignUp.styles";
import UserProfileImage from "./component/UserProfileImage/UserProfileImage";
import useForm from "./hooks/useForm";
import {useProfile} from "./hooks/useProfile";
import {useSignUp} from "./hooks/useSignUp";

const {DATA} = GLOBALS;
const SignUp: React.FC = () => {
    const {onSignUpPress} = useSignUp();
    const {onActionOptionSelect, profileImg} = useProfile({
        setUserProfileImage: url => {
            setFieldValue("picture", url);
        },
    });
    console.log(profileImg, "profileImg");

    const {formik, setFieldValue, handleBlur} = useForm({
        initialValues: {
            title: "",
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            dateOfBirth: "",
            phone: "",
            picture: "",
        },
        onSubmit: values => {
            console.log(values, "values");
            onSignUpPress(values);
        },
    });

    console.log(formik, "formik.....");
    // const {data, error, isFetching} = useGetAllUserQuery({});
    // const {data, error, isFetching} = useGetUsersByIdQuery({userId: '60d0fe4f5311236168a109ca'});
    // console.log(data, error, isFetching, 'data.....');

    return (
        <View style={styles.outerContainer}>
            <CustomHeader title={strings.login.signup} showBack={true} />
            <ParentContainer keyboardAvoidingView={true}>
                <View style={styles.mainContainer}>
                    <UserProfileImage
                        image_url={profileImg}
                        onActionOptionSelect={onActionOptionSelect}
                    />
                    <DropDown
                        options={DATA.TITLE}
                        label={strings.signUp.title}
                        selectedValue={formik.values.title}
                        onOptionSelect={option => {
                            setFieldValue("title", option.key);
                        }}
                    />
                    <DropDown
                        options={DATA.GENDER}
                        label={strings.signUp.gender}
                        selectedValue={formik.values.gender}
                        onOptionSelect={option => {
                            setFieldValue("gender", option.key);
                        }}
                    />
                    <CustomInput
                        label={strings.signUp.firstName}
                        onChangeText={text => setFieldValue("firstName", text)}
                        value={formik.values.firstName}
                        placeholder={strings.signUp.firstName}
                        errorMessage={
                            formik.errors.firstName && formik.touched?.firstName
                                ? formik.errors.firstName
                                : " "
                        }
                    />
                    <CustomInput
                        label={strings.signUp.lastName}
                        onChangeText={text => setFieldValue("lastName", text)}
                        value={formik.values.lastName}
                        placeholder={strings.signUp.lastName}
                        errorMessage={
                            formik.errors.lastName && formik.touched?.lastName
                                ? formik.errors.lastName
                                : ""
                        }
                    />
                    <CustomInput
                        label={strings.signUp.email}
                        onChangeText={text => setFieldValue("email", text)}
                        //    handleBlur={() => handleBlur('email')}
                        value={formik.values.email}
                        placeholder={strings.signUp.email}
                        errorMessage={
                            formik.errors.email && formik.touched?.email ? formik.errors.email : " "
                        }
                    />
                    <DateTimePicker
                        label={strings.signUp.dateOfBirth}
                        onChangeText={text => setFieldValue("dateOfBirth", text)}
                        value={formik.values.dateOfBirth}
                        placeholder={strings.signUp.dateOfBirth}
                        errorMessage={
                            formik.errors.dateOfBirth && formik.touched?.dateOfBirth
                                ? formik.errors.dateOfBirth
                                : " "
                        }
                    />
                    <CustomInput
                        label={strings.signUp.phone}
                        onChangeText={text => setFieldValue("phone", text)}
                        value={formik.values.phone}
                        placeholder={strings.signUp.phone}
                        errorMessage={
                            formik.errors.phone && formik.touched?.phone ? formik.errors.phone : " "
                        }
                    />

                    <CustomButton
                        title={strings.login.signup}
                        onBtnPress={async () => {
                            formik.handleSubmit();
                        }}
                    />
                </View>
            </ParentContainer>
        </View>
    );
};

export default SignUp;
