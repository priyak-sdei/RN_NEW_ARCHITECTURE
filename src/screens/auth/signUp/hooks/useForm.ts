import {strings} from "@localization/Localization";
import {SignUpFormValues} from "@type/Login";
import {useFormik} from "formik";
import * as Yup from "yup";
interface UseFormProps {
    initialValues: SignUpFormValues;
    onSubmit: (values: SignUpFormValues) => void;
}

const useForm = ({initialValues, onSubmit}: UseFormProps) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            title: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required(strings.validation.require),
            firstName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required(strings.validation.require),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required(strings.validation.require),
            gender: Yup.string().required(strings.validation.require),
            email: Yup.string()
                .email(strings.validation.invalid_email)
                .required(strings.validation.require),
            dateOfBirth: Yup.string().required(strings.validation.require),
            phone: Yup.string().required(strings.validation.require),
            picture: Yup.string().required(strings.validation.require),
        }),
    });

    const setFieldValue = (field: keyof SignUpFormValues, value: string) => {
        // console.log(formik, 'formik.....');
        formik.setFieldValue(field, value);
    };
    const handleBlur = (field: keyof SignUpFormValues) => {
        formik.handleBlur(field);
        formik.setTouched({[field]: true});
    };

    return {
        formik,
        setFieldValue,
        handleBlur,
    };
};

export default useForm;
