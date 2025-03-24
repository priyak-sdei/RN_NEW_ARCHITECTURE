import { useStyles } from '@/hooks/useStyles';
import React, { createContext, ReactNode, useContext } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../Header';
import { createStyles } from './styles';

const ScreenContext = createContext({
  variant: 'fixed',
});
type ScreenProps = ViewProps & {
  variant?: 'fixed' | 'scroll';
  barStyle?: 'light-content' | 'dark-content';
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
};
const Screen = ({
  variant = 'fixed',
  barStyle = 'dark-content',
  children,
  safeAreaTop = false,
  safeAreaBottom = false,
  ...rest
}: ScreenProps) => {
  const areaInsets = useSafeAreaInsets();

  const styles = useStyles(createStyles);

  const screenContainerStyle = {
    paddingTop: safeAreaTop ? areaInsets.top : 0,
    paddingBottom: safeAreaBottom ? areaInsets.bottom : 0,
  };

  return (
    <ScreenContext.Provider value={{ variant }}>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View
        style={[
          styles.ScreenContainer,
          screenContainerStyle, // Apply the calculated style here
        ]}
        {...rest}
      >
        {children}
      </View>
    </ScreenContext.Provider>
  );
};

type ScreenContainerProps = KeyboardAvoidingViewProps &
  KeyboardAwareScrollViewProps & {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
  };

const ScreenContainer = ({
  style,
  children,
  ...rest
}: ScreenContainerProps) => {
  const styles = useStyles(createStyles);
  const { variant } = useContext(ScreenContext);
  return variant === 'fixed' ? (
    <KeyboardAvoidingView
      style={StyleSheet.flatten([styles.container, style])}
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAwareScrollView
      style={StyleSheet.flatten([styles.container, style])}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

type ScreenBodyProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
const ScreenBody = ({ children, ...rest }: ScreenBodyProps) => {
  return <View {...rest}>{children}</View>;
};

Screen.Header = Header;
Screen.Container = ScreenContainer;
Screen.Body = ScreenBody;

export default Screen;
