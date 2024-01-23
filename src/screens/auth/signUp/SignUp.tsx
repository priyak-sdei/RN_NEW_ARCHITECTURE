import {CustomButton, CustomHeader, CustomInput, ParentContainer} from '@components/index';
import {strings} from '@localization/Localization';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from './SignUp.styles';
import useForm from './hooks/useForm';
import FormInput from './component/FormInput';

const SignUp: React.FC = () => {
    const {formik, setFieldValue} = useForm({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            // Handle form submission
            console.log('Form values:', values);
        },
    });

    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signup} showBack={true} />
            <View style={styles.mainContainer}>
                <FormInput
                    handleChange={text => setFieldValue('username', text)}
                    handleBlur={() => formik.handleBlur('username')}
                    field="username"
                    value={formik.values.username}
                    placeholder="Username"
                />
                {formik.errors.username && <Text>{formik.errors.username}</Text>}

                <FormInput
                    field="password"
                    handleChange={text => setFieldValue('password', text)}
                    handleBlur={() => formik.handleBlur('password')}
                    value={formik.values.password}
                    placeholder="Password"
                    secureTextEntry
                />
                {formik.errors.password && <Text>{formik.errors.password}</Text>}

                <Button title="Submit" onPress={() => formik.handleSubmit} />

                <CustomInput
                    value={''}
                    placeholder={strings.signUp.title}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.firstName}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.lastName}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.gender}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.email}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.dateOfBirth}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.phone}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.picture}
                    onChangeText={() => {}}
                />
                <CustomInput
                    value={''}
                    placeholder={strings.signUp.location}
                    onChangeText={() => {}}
                />

                <CustomButton
                    customContainerStyle={{marginTop: 20}}
                    title={strings.login.signup}
                    onBtnPress={async () => {}}
                />
            </View>
        </ParentContainer>
    );
};

export default SignUp;
