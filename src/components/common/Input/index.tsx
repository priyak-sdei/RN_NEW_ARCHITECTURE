import { useTheme } from "@/themes/ThemeContext";
import { colors } from "@/themes/colors";
import { useRouter } from "expo-router";
import { ReactElement } from "react";

import {
  View,
  ViewProps,
  Text,
  Pressable,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createStyles } from "./styles";
import { useStyles } from "@/hooks/useStyles";

type CustomTextInputProps = TextInputProps & {
  withLabel?: boolean;
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
  withLabel = true,
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
