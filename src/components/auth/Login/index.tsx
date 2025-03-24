import { IMAGES } from '@/assets';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useStyles } from '@/hooks/useStyles';
import { moderateScale, SPACING } from '@/themes';
import { ExtendedTheme } from '@/types/ColorPalette';
import { Image, StyleSheet, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
export default function Login() {
  const styles = useStyles(createStyles);
  const { email, setEmail, password, setPassword, onLogin } = useLogin();
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo} style={styles.imageContainer} />
      <Input
        placeholder="Email"
        labelTitle="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        labelTitle="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        buttonTitle="Login"
        buttonStyle={styles.buttonContainer}
        onPress={onLogin}
        // disabled={!email || !password}
      />
    </View>
  );
}

const createStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    buttonContainer: {
      marginVertical: moderateScale(SPACING.m),
    },
    container: {},
    imageContainer: {
      alignSelf: 'center',
      marginVertical: moderateScale(SPACING.m),
    },
  });
