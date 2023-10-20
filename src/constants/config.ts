import {IMAGES} from '@assets/images/index';
const CONFIG: {[key: string]: Array<any>} = {
    menu_item: [
        {
            id: 1,
            title: 'Redux Toolkit Demo',
            isSelected: false,
            icon: IMAGES.bell,
            sub_menu: [],
            screen: 'Profile',
        },
        {
            id: 2,
            title: 'Form and Components',
            isSelected: false,
            icon: IMAGES.bell,
            sub_menu: [],
        },
        {
            id: 3,
            title: 'Social Media Login',
            sub_menu: [
                {title: 'Google Login', id: 1, isSelected: false},
                {title: 'Facebook Login', id: 2, isSelected: false},
                {title: 'Apple Login', id: 3, isSelected: false},
            ],
            isSelected: false,
            icon: IMAGES.bell,
        },
        {
            id: 4,
            title: 'Native Bridging',
            sub_menu: [],
            isSelected: false,
            icon: IMAGES.bell,
        },
    ],
};

export default CONFIG;
