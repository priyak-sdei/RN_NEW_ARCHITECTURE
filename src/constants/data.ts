// Define a type for the object structure

type CommonList = {
    key: string;
    value: string;
};
const DATA: {[key: string]: Array<CommonList>} = {
    TITLE: [
        {key: 'Mr', value: 'Mr'},
        {key: 'Miss', value: 'Miss'},
        {key: 'Mrs', value: 'Mrs'},
    ],
    GENDER: [
        {key: 'Male', value: 'Male'},
        {key: 'Female', value: 'Female'},
        {key: 'Binary', value: 'Binary'},
    ],
};

export default DATA;
