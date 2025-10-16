import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import UseInput from '../../../component/Hook/UseInput';
import { useForm } from 'react-hook-form';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import AppButton from '../../../component/AppButton';
import RowLabel from '../../../component/Label/RowLabel';
import CustomButton from '../../../component/AppButton/GradientButton';
const LoginScreen: React.FC = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { control, watch, setValue } = useForm({
    defaultValues: { email: '', password: '', secureTextEntry: true },
  });

  const handleLogin = () => {
    // Replace with actual authentication logic
    if (email && password) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Label
        labelContent={'Recipe'}
        color={COLORS.white}
        size={100}
        family={FONTS.DancingScriptBold}
        align={'center'}
      />
      <View style={styles.card}>
        <Label
          labelContent={'Hello'}
          size={25}
          family={FONTS.PoppinsBold}
          align={'center'}
        />
        <Label
          labelContent={'Please login to your account'}
          size={16}
          family={FONTS.PoppinsRegular}
          align={'center'}
          color={COLORS.gray}
        />
        <UseInput
          control={control}
          name={'email'}
          placeholder="Email"
          renderRightIcon={() => (
            <Ionicons name="mail" size={25} color={'#EF8E32'} />
          )}
          viewStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          inputStyle={styles.inputText}
        />
        <UseInput
          control={control}
          name={'password'}
          placeholder="Password"
          viewStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          inputStyle={styles.inputText}
          secureTextEntry={watch('secureTextEntry')}
          renderRightIcon={() => (
            <Ionicons
              name={watch('secureTextEntry') ? 'eye' : 'eye-off'}
              onPress={() =>
                setValue('secureTextEntry', !watch('secureTextEntry'))
              }
              size={25}
              color={'#EF8E32'}
            />
          )}
        />
        <Label
          labelContent={'Forgot Password?'}
          align={'right'}
          color={'#EF8E32'}
          mt={15}
          onPress={() => props.navigation.navigate('SendCode')}
        />
        <CustomButton
          title="Login"
          textSize={16}
          textColor={COLORS.white}
          containerStyle={styles.button}
        />
        <RowLabel
          firstLabel={'Login using social media or '}
          secondLabel={'Signup!'}
          onSecondTouch={() => props.navigation.navigate('Register')}
          color1={COLORS.textGray}
          color2={COLORS.black2}
          viewStye={{ marginTop: 15, alignSelf: 'center' }}
          family={FONTS.PoppinsMedium}
          family1={FONTS.PoppinsBold}
          firstLabelSize={15}
          secondLabelSize={15}
        />
        <View style={styles.social}>
          <Ionicons
            name="logo-facebook"
            size={25}
            color={'#424F54'}
            style={{ marginHorizontal: 15 }}
          />
          <Ionicons
            name="logo-twitter"
            size={25}
            color={'#424F54'}
            style={{ marginHorizontal: 15 }}
          />
          <Ionicons
            name="mail"
            size={25}
            color={'#424F54'}
            style={{ marginHorizontal: 15 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#6CC14E',
    paddingTop: 30,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 35,
    marginHorizontal: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#d6edffff',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: COLORS.white,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 16,
    fontFamily: FONTS.PoppinsRegular,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#6CC14E',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#6CC14E',
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    height: 45,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2.5,
    shadowRadius: 3,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
});

export default LoginScreen;
