import {useFormik} from 'formik';

interface LoginFormValues {
    username: string;
    password: string;
}

interface UseFormProps {
    initialValues: LoginFormValues;
    onSubmit: (values: LoginFormValues) => void;
}

const useForm = ({initialValues, onSubmit}: UseFormProps) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate: values => {
            const errors: Partial<LoginFormValues> = {};

            if (!values.username) {
                errors.username = 'Username is required';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }

            return errors;
        },
    });
    const setFieldValue = (field: keyof LoginFormValues, value: string) => {
        formik.setFieldValue(field, value);
    };

    return {
        formik,
        setFieldValue,
    };
};

export default useForm;
