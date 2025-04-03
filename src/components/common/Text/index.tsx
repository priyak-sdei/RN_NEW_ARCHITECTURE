import { useStyles } from '@/hooks/useStyles';
import React, { ReactNode } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { createStyles } from './styles';
export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  children?: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}
/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
function Text(props: TextProps) {
  const { text, style, children, onPress } = props;
  const styles = useStyles(createStyles);
  return (
    <RNText {...props} style={[styles.text, style]} onPress={onPress}>
      {children}
    </RNText>
  );
}

export default Text;
