import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useStyles } from '@/hooks/useStyles';
import { moderateScale, SPACING } from '@/themes';
import { ExtendedTheme } from '@/types/ColorPalette';
import { StyleSheet, View } from 'react-native';
import { useRegister } from '../hooks/useRegister';
export default function Register() {
  const styles = useStyles(createStyles);
  const {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onRegister,
  } = useRegister();
  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        labelTitle="Name"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Phone Number"
        labelTitle="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
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
      <Input
        placeholder="Confirm Password"
        labelTitle="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button
        buttonTitle="Register"
        buttonStyle={styles.buttonContainer}
        onPress={onRegister}
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
