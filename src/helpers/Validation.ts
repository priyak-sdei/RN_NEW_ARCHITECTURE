const EMAIL_REGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const PHONE_REGEX = /^(\d{1})?\d{10}$/;
const PHONE_REGEX_1 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const DECIMAL_REGEX = /^\d+(\.\d{1,2})?$/;
const NUMERIC_REGEX = /^\d+$/;
const SINGLE_DECIMAL_REGEX = /^\d+(\.\d{1})?$/;
const FORCE_SINGLE_DECIMAL_REGEX = /^\d+\.\d{1}$/;

const empty = input => {
    return space(input) === "" || space(input) === 0 || space(input) === null;
};

const space = input => {
    return input ? input.trim() : null;
};

const email = input => {
    return !EMAIL_REGEX.test(input);
};

const password = input => {
    return !PASSWORD_REGEX.test(input);
};

const phone = input => {
    return !PHONE_REGEX.test(removeMasking(input));
};

const decimal = input => {
    return !DECIMAL_REGEX.test(input);
};

const single_decimal = input => {
    return !SINGLE_DECIMAL_REGEX.test(input);
};

const force_single_decimal = input => {
    return !FORCE_SINGLE_DECIMAL_REGEX.test(input);
};

const numeric = input => {
    return !NUMERIC_REGEX.test(input);
};

const errorDisplay = (msg, callback) => {
    return callback(msg);
};

const removeMasking = data => {
    const removePlus = data.replace("+", "");
    const value = removePlus.replace("(", "");
    const newNo = value.replace(")", "");
    const space = newNo.replace(" ", "");
    const dash = space.replace("-", "");
    __DEV__ && console.log(dash);
    return dash;
};

export const Validate = {
    space,
    email,
    phone,
    password,
    empty,
    errorDisplay,
    decimal,
    single_decimal,
    force_single_decimal,
    numeric,
};
