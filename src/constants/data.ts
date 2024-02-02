// Define a type for the object structure

type CommonList = {
    key: string;
    value: string;
};
const DATA: {[key: string]: Array<CommonList>} = {
    TITLE: [
        {key: 'mr', value: 'Mr'},
        {key: 'ms', value: 'Miss'},
        {key: 'mrs', value: 'Mrs'},
        {key: 'miss', value: 'Mrs'},
    ],
    GENDER: [
        {key: 'male', value: 'male'},
        {key: 'female', value: 'female'},
        {key: 'other', value: 'other'},
    ],
};

export default DATA;
