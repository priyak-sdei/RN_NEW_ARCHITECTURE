import {useGetAllStateQuery} from '@/redux/api/AuthAPIs/authAPI';
import {
    CustomButton,
    CustomHeader,
    CustomInput,
    DateTimePicker,
    DropDown,
    ParentContainer,
} from '@components/index';
import {strings} from '@localization/Localization';
import React from 'react';
import {View} from 'react-native';
import styles from './SignUp.styles';
import UserProfileImage from './component/UserProfileImage/UserProfileImage';
import useForm from './hooks/useForm';
import {useProfile} from './hooks/useProfile';
import {useSignUp} from './hooks/useSignUp';
const SignUp: React.FC = () => {
    const {data: allStates = []} = useGetAllStateQuery();

    const {onSignUpPress, isLoading} = useSignUp();
    const {onActionOptionSelect, profileImg} = useProfile({
        setUserProfileImage: url => {
            setFieldValue('profile_photo', url);
        },
    });
    const {formik, setFieldValue, handleFormError} = useForm({
        onSubmit: values => {
            onSignUpPress(values);
        },
    });

    return (
        <View style={styles.outerContainer}>
            <CustomHeader title={strings.login.signup} showBack={true} />
            <ParentContainer keyboardAvoidingView={true} isLoading={isLoading}>
                <View style={styles.mainContainer}>
                    <UserProfileImage
                        image_url={profileImg}
                        onActionOptionSelect={onActionOptionSelect}
                    />
                    <View style={styles.horizontalContainer}>
                        <View style={styles.outerContainer}>
                            <CustomInput
                                label={strings.signUp.firstName}
                                onChangeText={text => setFieldValue('firstName', text)}
                                value={formik.values.firstName}
                                placeholder={strings.signUp.firstName}
                                errorMessage={handleFormError('firstName')}
                            />
                        </View>
                        <View style={styles.outerContainer}>
                            <CustomInput
                                label={strings.signUp.lastName}
                                onChangeText={text => setFieldValue('lastName', text)}
                                value={formik.values.lastName}
                                placeholder={strings.signUp.lastName}
                                errorMessage={handleFormError('lastName')}
                            />
                        </View>
                    </View>
                    <CustomInput
                        label={strings.signUp.email}
                        onChangeText={text => setFieldValue('email', text)}
                        value={formik.values.email}
                        placeholder={strings.signUp.email}
                        errorMessage={handleFormError('email')}
                    />
                    <DateTimePicker
                        label={strings.signUp.dateOfBirth}
                        onChangeText={text => setFieldValue('dateOfBirth', text)}
                        value={formik.values.dateOfBirth}
                        placeholder={strings.signUp.dateOfBirth}
                        errorMessage={handleFormError('dateOfBirth')}
                    />
                    <CustomInput
                        label={strings.signUp.phone}
                        onChangeText={text => setFieldValue('phone', text)}
                        value={formik.values.phone}
                        placeholder={strings.signUp.phone}
                        errorMessage={handleFormError('phone')}
                    />
                    <CustomInput
                        label={strings.login.password}
                        onChangeText={text => setFieldValue('password', text)}
                        value={formik.values.password}
                        placeholder={strings.login.password}
                        errorMessage={handleFormError('password')}
                    />
                    <CustomInput
                        label={strings.signUp.organisation}
                        onChangeText={text => setFieldValue('organization', text)}
                        value={formik.values.organization}
                        placeholder={strings.signUp.organisation}
                        errorMessage={handleFormError('organization')}
                    />
                    <CustomInput
                        label={strings.signUp.city}
                        onChangeText={text => setFieldValue('city', text)}
                        value={formik.values.city}
                        placeholder={strings.signUp.city}
                        errorMessage={handleFormError('city')}
                    />
                    <DropDown
                        options={allStates}
                        label={strings.signUp.state}
                        selectedValue={formik.values.state}
                        errorMessage={handleFormError('state')}
                        onOptionSelect={option => {
                            setFieldValue('state', option.value);
                        }}
                        multiSelection={false}
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
