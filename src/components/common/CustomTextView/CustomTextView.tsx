import {IconNode} from '@rneui/base';
import {Text} from '@rneui/themed';
import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {styles} from './CustomTextView.styles';
interface MyComponentProps {
    customh3Style?: object;
    customTextStyle?: object;
    text?: string;
    attr?: object;
    h3?: boolean;
    h9?: boolean;
}

const CustomTextView: React.FC<MyComponentProps> = props => {
    const {text = '', customh3Style = {}, customTextStyle = {}, attr = {}} = props;

    return (
        <Text
            {...attr}
            h1Style={styles.h1Style}
            h2Style={styles.h2Style}
            h3Style={[styles.h3Style, customh3Style]}
            h4Style={[styles.h4Style]}
            style={[styles.textStyle, customTextStyle]}>
            {text}
        </Text>
    );
};
export default CustomTextView;
