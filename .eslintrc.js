module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        "react-native/react-native": true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        '@react-native-community', 
        "prettier",
        "prettier/react"
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        "ecmaFeatures": {
            "jsx": true
        },
    },
    'plugins': [
        'react',
        'react-native',
        'module-resolver', 'testing-library'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};


