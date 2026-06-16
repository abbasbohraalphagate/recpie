import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import Label from '../../../component/Label';
import UseInput from '../../../component/Hook/UseInput';
import { useForm } from 'react-hook-form';
import { COLORS, FONTS } from '../../../constant';
import Ionicons from '@react-native-vector-icons/ionicons';
import CustomButton from '../../../component/AppButton/GradientButton';

type Props = {
  // navigation prop is optional — compatible with react-navigation if provided
  navigation?: any;
};

const SecurityScreen: React.FC<Props> = ({ navigation }) => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',
      ingredients: [
        {
          name: '',
          amount: '',
        },
        {
          name: '',
          amount: '',
        },
        {
          name: '',
          amount: '',
        },
      ],
      instruction: '',
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <Label
        labelContent={'Reset your password'}
        size={18}
        color={COLORS.black2}
        family={FONTS.PoppinsBold}
        mh={10}
        mt={20}
      />
      <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
        <Label
          labelContent={'Password'}
          size={16}
          color={COLORS.black}
          family={FONTS.PoppinsSemiBold}
        />
        <UseInput
          control={control}
          name={'password'}
          renderRightIcon={<Ionicons name="eye-off" size={20} />}
          inputContainerStyle={{
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        />
        <Label
          labelContent={'Confirm Password'}
          size={16}
          color={COLORS.black}
          family={FONTS.PoppinsSemiBold}
          mt={20}
        />
        <UseInput
          control={control}
          name={'confirmPassword'}
          renderRightIcon={<Ionicons name="eye-off" size={20} />}
          inputContainerStyle={{
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        />
      </View>
      <CustomButton
        title="Update Password"
        textSize={16}
        textColor={COLORS.white}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#6CC14E',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6CC14E',
    width: '55%',
    alignSelf: 'center',
    marginTop: 30,
    height: 45,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2.5,
    shadowRadius: 3,
  },
});
