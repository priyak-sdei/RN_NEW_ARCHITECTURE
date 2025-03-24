import { useStyles } from '@/hooks/useStyles';
import { colors } from '@/themes/colors';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { createStyles } from './styles';
type BaseButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  imageWithText?: boolean;
  imageWithTextSource?: ImageSourcePropType;
  imageWithTextSourceStyle?: StyleProp<ImageStyle>;
  isLoading?: boolean;
  disabled?: boolean;
};

type ImageButtonProps = {
  imageOnlyButton: true;
  singleImageSource: ImageSourcePropType;
  singleImageStyle?: StyleProp<ImageStyle>;
  buttonTitle?: never;
};

type TextButtonProps = {
  imageOnlyButton?: false;
  singleImageSource?: never;
  singleImageStyle?: never;
  buttonTitle: string;
};

type ButtonProps = BaseButtonProps & (ImageButtonProps | TextButtonProps);
/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a TouchableOpacity component. Also include loading in button
 * @param {ButtonProps} props - The props for the `Button` component.
 * @returns {JSX.Element} The rendered `Button` component.
 * @example
 * <CustomButton
 *   buttonTitle="common:ok"
 *   buttonStyle={styles.button}
 *   textStyle={styles.buttonText}
 *   onPress={handleButtonPress}
 * />
 */
const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  textStyle,
  imageOnlyButton = false,
  singleImageStyle,
  singleImageSource,
  onPress,
  imageWithText = false,
  imageWithTextSource,
  imageWithTextSourceStyle,
  buttonTitle,
  isLoading,
  disabled = false,
  ...props
}) => {
  const styles = useStyles(createStyles);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...props}
      style={[styles.buttonStyle, buttonStyle, disabled && styles.disabledBtn]}
    >
      {imageOnlyButton ? (
        <Image
          source={singleImageSource}
          style={singleImageStyle}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.imageWithTextContainer}>
          {imageWithText && (
            <Image
              source={imageWithTextSource}
              style={imageWithTextSourceStyle}
              resizeMode="contain"
            />
          )}
          {isLoading ? (
            <ActivityIndicator color={colors.white} size={23} />
          ) : (
            <Text style={[styles.textStyle, textStyle]}>{buttonTitle}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
