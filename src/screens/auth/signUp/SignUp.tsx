import {
    CustomButton,
    CustomHeader,
    ParentContainer,
    CustomInput,
    DropDown,
} from '@components/index';
import {strings} from '@localization/Localization';
import React from 'react';
import {View} from 'react-native';
import styles from './SignUp.styles';
import useForm from './hooks/useForm';
import {useSignUp} from './hooks/useSignUp';
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
            onSignUpPress(values);
        },
    });

    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signup} showBack={true} />
            <View style={styles.mainContainer}>
                <DropDown label={strings.signUp.title} selectedValue={formik.values.title} />
                {/* <CustomInput
                    label={strings.signUp.title}
                    onChangeText={text => setFieldValue('title', text)}
                    handleBlur={() => handleBlur('title')}
                    value={formik.values.title}
                    placeholder={strings.signUp.title}
                    errorMessage={formik.errors.title ? formik.errors.title : ''}
                /> */}
                <CustomInput
                    label={strings.signUp.firstName}
                    onChangeText={text => setFieldValue('firstName', text)}
                    handleBlur={() => handleBlur('firstName')}
                    value={formik.values.firstName}
                    placeholder={strings.signUp.firstName}
                    errorMessage={formik.errors.firstName ? formik.errors.firstName : ''}
                />
                <CustomInput
                    label={strings.signUp.lastName}
                    onChangeText={text => setFieldValue('lastName', text)}
                    handleBlur={() => handleBlur('lastName')}
                    value={formik.values.lastName}
                    placeholder={strings.signUp.lastName}
                    errorMessage={formik.errors.lastName ? formik.errors.lastName : ''}
                />
                <CustomInput
                    label={strings.signUp.gender}
                    onChangeText={text => setFieldValue('gender', text)}
                    handleBlur={() => handleBlur('gender')}
                    value={formik.values.gender}
                    placeholder={strings.signUp.gender}
                    errorMessage={formik.errors.gender ? formik.errors.gender : ''}
                />
                <CustomInput
                    label={strings.signUp.email}
                    onChangeText={text => setFieldValue('email', text)}
                    handleBlur={() => handleBlur('email')}
                    value={formik.values.email}
                    placeholder={strings.signUp.email}
                    errorMessage={formik.errors.email ? formik.errors.email : ''}
                />
                <CustomInput
                    label={strings.signUp.dateOfBirth}
                    onChangeText={text => setFieldValue('dateOfBirth', text)}
                    handleBlur={() => handleBlur('dateOfBirth')}
                    value={formik.values.dateOfBirth}
                    placeholder={strings.signUp.dateOfBirth}
                    errorMessage={formik.errors.dateOfBirth ? formik.errors.dateOfBirth : ''}
                />
                <CustomInput
                    label={strings.signUp.phone}
                    onChangeText={text => setFieldValue('phone', text)}
                    handleBlur={() => handleBlur('phone')}
                    value={formik.values.phone}
                    placeholder={strings.signUp.phone}
                    errorMessage={formik.errors.phone ? formik.errors.phone : ''}
                />
                <CustomInput
                    label={strings.signUp.picture}
                    onChangeText={text => setFieldValue('picture', text)}
                    handleBlur={() => handleBlur('picture')}
                    value={formik.values.picture}
                    placeholder={strings.signUp.picture}
                    errorMessage={formik.errors.picture ? formik.errors.picture : ''}
                />
                <CustomButton
                    customContainerStyle={{marginTop: 20}}
                    title={strings.login.signup}
                    onBtnPress={() => formik.handleSubmit()}
                />
            </View>
        </ParentContainer>
    );
};

export default SignUp;
