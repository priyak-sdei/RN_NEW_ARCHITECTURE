import {strings} from '@localization/Localization';
import {SignUpFormValues} from '@type/Login';
import {useFormik} from 'formik';
import * as Yup from 'yup';
interface UseFormProps {
    // initialValues: SignUpFormValues;
    onSubmit: (values: SignUpFormValues) => void;
}
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    organization: '',
    state: '',
    city: '',
    password: '',
    profile_photo: '',
};

const useForm = ({onSubmit}: UseFormProps) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required(strings.validation.require),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required(strings.validation.require),
            city: Yup.string().required(strings.validation.require),
            organization: Yup.string().required(strings.validation.require),
            password: Yup.string().required(strings.validation.require),
            email: Yup.string()
                .email(strings.validation.invalid_email)
                .required(strings.validation.require),
            dateOfBirth: Yup.string().required(strings.validation.require),
            phone: Yup.string().required(strings.validation.require),
            state: Yup.string().required(strings.validation.require),
            //  picture: Yup.string().required(strings.validation.require),
        }),
    });

    const setFieldValue = (field: keyof SignUpFormValues, value: string) => {
        formik.setFieldValue(field, value);
    };
    const handleBlur = (field: keyof SignUpFormValues) => {
        formik.handleBlur(field);
        formik.setTouched({[field]: true});
    };

    function handleFormError(key) {
        return formik.errors[key] && formik.touched[key] ? formik.errors[key] : ' ';
    }

    return {
        formik,
        setFieldValue,
        handleBlur,
        handleFormError,
    };
};

export default useForm;
