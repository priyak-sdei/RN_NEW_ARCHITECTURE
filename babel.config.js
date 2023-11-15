module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@constants': './src/constants',
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@assets': './src/assets',
                    '@theme': './src/theme',
                    '@localization': './src/localization',
                    '@': './src',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
