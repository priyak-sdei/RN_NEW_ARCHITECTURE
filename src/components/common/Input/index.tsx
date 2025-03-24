import { colors } from '@/themes/colors';

import { useStyles } from '@/hooks/useStyles';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { createStyles } from './styles';

type CustomTextInputProps = TextInputProps & {
  textInputContainer?: StyleProp<ViewStyle>;
  labelTitle?: string;
  labelStyle?: StyleProp<TextStyle>;
  withLabelContainerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  sourceLeftIcon?: ImageSourcePropType;
  leftIconDisabled?: boolean;
  onLeftIconPress?: () => void;
  leftIconStyle?: StyleProp<ImageStyle>;
  sourceRightIcon?: ImageSourcePropType;
  rightIconDisabled?: boolean;
  onRightIconPress?: () => void;
  rightIconStyle?: StyleProp<ImageStyle>;
};

const Input: React.FC<CustomTextInputProps> = ({
  textInputContainer,
  labelTitle,
  labelStyle,
  withLabelContainerStyle,
  textInputStyle,
  sourceLeftIcon,
  leftIconDisabled = true,
  onLeftIconPress,
  leftIconStyle,
  sourceRightIcon,
  rightIconDisabled = false,
  onRightIconPress,
  rightIconStyle,
  ...textInputProps
}) => {
  const styles = useStyles(createStyles);

  return (
    <View style={[styles.withLabelContainer, withLabelContainerStyle]}>
      {labelTitle && (
        <Text style={[styles.labelStyle, labelStyle]}>{labelTitle}</Text>
      )}

      <View style={[styles.textInputContainer, textInputContainer]}>
        {sourceLeftIcon && (
          <TouchableOpacity
            disabled={leftIconDisabled}
            style={styles.leftIconContainer}
            onPress={onLeftIconPress}
          >
            <Image
              source={sourceLeftIcon}
              style={[styles.leftIcon, leftIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <TextInput
          {...textInputProps}
          style={[styles.textInputStyle, textInputStyle]}
          cursorColor={colors.black}
        />
        {sourceRightIcon && (
          <TouchableOpacity
            disabled={rightIconDisabled}
            onPress={onRightIconPress}
          >
            <Image
              source={sourceRightIcon}
              style={[styles.rightIcon, rightIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
