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
const SendCode: React.FC = props => {
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
          fw={'800'}
        />
        <Label
          labelContent={'Please check your email '}
          size={16}
          family={FONTS.PoppinsRegular}
          align={'center'}
          color={COLORS.gray}
        />
        <UseInput
          control={control}
          name={'email'}
          placeholder="Email"
          viewStyle={styles.inputContainer}
          renderRightIcon={() => (
            <Ionicons name="mail" size={25} color={'#EF8E32'} />
          )}
          inputContainerStyle={styles.input}
          inputStyle={styles.inputText}
        />

        <CustomButton
          title="SEND"
          textColor={COLORS.white}
          textSize={16}
          textAlign="center"
          containerStyle={{
            backgroundColor: '#6CC14E',
            alignItems: 'center',
            paddingHorizontal: 15,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#6CC14E',
            width: '40%',
            alignSelf: 'center',
            marginTop: 20,
            height: 38,
            justifyContent: 'center',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 2.5,
            shadowRadius: 3,
          }}
        />
        <RowLabel
          firstLabel={'Login using social media or '}
          secondLabel={'Signup!'}
          onSecondTouch={() => props.navigation.navigate('Select Account')}
          color1={COLORS.textGray}
          color2={COLORS.black2}
          viewStye={{ marginTop: 15, alignSelf: 'center' }}
          family={FONTS.PoppinsRegular}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
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
    marginTop: 35,
    borderRadius: 40,
    backgroundColor: '#6CC14E',
    paddingVertical: 12,
    width: '50%',
    alignSelf: 'center',
    elevation: 8,
    shadowColor: '#6CC14E',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
});

export default SendCode;
