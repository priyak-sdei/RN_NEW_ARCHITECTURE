import {
    CustomButton,
    CustomHeader,
    CustomInput,
    DateTimePicker,
    DropDown,
    ParentContainer,
} from '@components/index';
import GLOBALS from '@constants/index';
import {strings} from '@localization/Localization';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './SignUp.styles';
import useForm from './hooks/useForm';
import {useSignUp} from './hooks/useSignUp';
import {
    useGetAllUserQuery,
    useGetUsersByIdQuery,
    useCreateUserMutation,
} from '@/redux/api/userAPIs/userAPI';
const {DATA} = GLOBALS;
const SignUp: React.FC = () => {
    const {onSignUpPress} = useSignUp();
    const {formik, setFieldValue, handleBlur} = useForm({
        initialValues: {
            title: '',
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            dateOfBirth: '',
            phone: '',
            picture: '',
        },
        onSubmit: values => {
            console.log(values, 'values');
            onSignUpPress(values);
        },
    });

    // const {data, error, isFetching} = useGetAllUserQuery({});
    // const {data, error, isFetching} = useGetUsersByIdQuery({userId: '60d0fe4f5311236168a109ca'});
    // console.log(data, error, isFetching, 'data.....');

    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signup} showBack={true} />
            <View style={styles.mainContainer}>
                <DropDown
                    options={DATA.TITLE}
                    label={strings.signUp.title}
                    selectedValue={formik.values.title}
                    onOptionSelect={option => {
                        setFieldValue('title', option.key);
                    }}
                />
                <DropDown
                    options={DATA.GENDER}
                    label={strings.signUp.gender}
                    selectedValue={formik.values.gender}
                    onOptionSelect={option => {
                        setFieldValue('gender', option.key);
                    }}
                />

                <CustomInput
                    label={strings.signUp.firstName}
                    onChangeText={text => setFieldValue('firstName', text)}
                    handleBlur={() => handleBlur('firstName')}
                    value={formik.values.firstName}
                    placeholder={strings.signUp.firstName}
                    errorMessage={
                        formik.errors.firstName && formik.touched?.firstName
                            ? formik.errors.firstName
                            : ' '
                    }
                />
                <CustomInput
                    label={strings.signUp.lastName}
                    onChangeText={text => setFieldValue('lastName', text)}
                    handleBlur={() => handleBlur('lastName')}
                    value={formik.values.lastName}
                    placeholder={strings.signUp.lastName}
                    errorMessage={
                        formik.errors.lastName && formik.touched?.lastName
                            ? formik.errors.lastName
                            : ''
                    }
                />

                <CustomInput
                    label={strings.signUp.email}
                    onChangeText={text => setFieldValue('email', text)}
                    handleBlur={() => handleBlur('email')}
                    value={formik.values.email}
                    placeholder={strings.signUp.email}
                    errorMessage={
                        formik.errors.email && formik.touched?.email ? formik.errors.email : ' '
                    }
                />
                <DateTimePicker
                    label={strings.signUp.dateOfBirth}
                    onChangeText={text => setFieldValue('dateOfBirth', text)}
                    value={formik.values.dateOfBirth}
                    handleBlur={() => {
                        console.log('blurrrr');
                        handleBlur('dateOfBirth');
                    }}
                    placeholder={strings.signUp.dateOfBirth}
                    errorMessage={formik.errors.dateOfBirth ? formik.errors.dateOfBirth : ' '}
                />
                <CustomInput
                    label={strings.signUp.phone}
                    onChangeText={text => setFieldValue('phone', text)}
                    handleBlur={() => handleBlur('phone')}
                    value={formik.values.phone}
                    placeholder={strings.signUp.phone}
                    errorMessage={
                        formik.errors.phone && formik.touched?.phone ? formik.errors.phone : ' '
                    }
                />
                <CustomInput
                    label={strings.signUp.picture}
                    onChangeText={text => setFieldValue('picture', text)}
                    handleBlur={() => handleBlur('picture')}
                    value={formik.values.picture}
                    placeholder={strings.signUp.picture}
                    errorMessage={
                        formik.errors.picture && formik.touched?.picture
                            ? formik.errors.picture
                            : ' '
                    }
                />
                <CustomButton
                    customContainerStyle={{marginTop: 20}}
                    title={strings.login.signup}
                    onBtnPress={async () => {
                        // await createUser({
                        //     name: 'hi',
                        // });
                        //  onSignUpPress({});
                        formik.handleSubmit();
                    }}
                />
            </View>
        </ParentContainer>
    );
};

export default SignUp;
