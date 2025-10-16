import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS } from '../../../constant';
import Label from '../../../component/Label';
import UseInput from '../../../component/Hook/UseInput';
import { useForm } from 'react-hook-form';
import Ionicons from '@react-native-vector-icons/ionicons';
import TouchableComponent from '../../../component/TouchableComponent';
import AppButton from '../../../component/AppButton';
import RowLabel from '../../../component/Label/RowLabel';
import CustomButton from '../../../component/AppButton/GradientButton';

const CreateAccount: React.FC = props => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      email: '',
      password: '',
      secureTextEntry: true,
      selectCuisine: [],
      requirements: [],
    },
  });

  const feilds = [
    { name: 'name', placeholder: 'Name' },

    { name: 'email', placeholder: 'Email' },
    { name: 'password', placeholder: 'Password' },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
    },
    {
      name: 'Phone',
      placeholder: 'phone',
    },
  ];

  const cuisine = [
    'Italian',
    'Chinese',
    'Indian',
    'Mexican',
    'Thai',
    'French',
    'Japanese',
    'Mediterranean',
    'American',
    'Spanish',
    'Greek',
    'Lebanese',
  ];

  const requirement = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Halal',
    'Kosher',
    'Pescatarian',
    'Low-Carb',
    'Keto',
    'Paleo',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Label
        labelContent={'Recipe'}
        color={'#6CC14E'}
        size={100}
        family={FONTS.DancingScriptBold}
        align={'center'}
      />
      <Label
        labelContent={'Signup now!'}
        color={'#000'}
        size={30}
        family={FONTS.PoppinsBold}
        align={'center'}
        mt={30}
        mb={30}
      />
      {feilds?.map((item, index) => (
        <UseInput
          key={index}
          control={control}
          name={item.name}
          placeholder={item.placeholder}
          viewStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          inputStyle={styles.inputText}
        />
      ))}
      <Label
        labelContent={'Favourite Category/Cuisine:'}
        color={COLORS.darkgray}
        size={18}
        family={FONTS.PoppinsBold}
        mt={20}
      />
      <View style={styles.selector}>
        {cuisine?.map((item, index) => (
          <TouchableComponent
            onPress={() => {
              const cusinie = watch('selectCuisine') || [];

              if (cusinie.includes(item)) {
                setValue(
                  'selectCuisine',
                  cusinie.filter((c: string) => c !== item),
                );
                return;
              } else {
                setValue('selectCuisine', [...cusinie, item]);
              }
            }}
            key={index}
            style={{
              ...styles.textStyle,
              backgroundColor: watch('selectCuisine')?.includes(item)
                ? '#7A7A7A'
                : '#fff',
            }}
          >
            <Label labelContent={item} align={'center'} size={14} />
          </TouchableComponent>
        ))}
      </View>
      <Label
        labelContent={'Deitary Requirements:'}
        color={COLORS.darkgray}
        size={18}
        family={FONTS.PoppinsBold}
        mt={20}
      />
      <View style={styles.selector}>
        {requirement?.map((item, index) => (
          <TouchableComponent
            onPress={() => {
              const cusinie = watch('requirements') || [];

              if (cusinie.includes(item)) {
                setValue(
                  'requirements',
                  cusinie.filter((c: string) => c !== item),
                );
                return;
              } else {
                setValue('requirements', [...cusinie, item]);
              }
            }}
            key={index}
            style={{
              ...styles.textStyle,
              backgroundColor: watch('requirements')?.includes(item)
                ? '#7A7A7A'
                : '#fff',
            }}
          >
            <Label labelContent={item} align={'center'} size={14} />
          </TouchableComponent>
        ))}
      </View>
      <CustomButton
        title="SIGNUP"
        textSize={16}
        textColor={COLORS.white}
        containerStyle={styles.button}
      />
      <RowLabel
        firstLabel={'Already member? Login '}
        secondLabel={'Here'}
        onSecondTouch={() => props.navigation.goBack()}
        color1={COLORS.textGray}
        color2={'#6CC14E'}
        viewStye={{ marginTop: 15, alignSelf: 'center' }}
        family={FONTS.PoppinsMedium}
        family1={FONTS.PoppinsBold}
        firstLabelSize={18}
        secondLabelSize={18}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    padding: 15,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  selector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  textStyle: {
    alignItems: 'center',
    marginTop: 10,

    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#7A7A7A',
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
});

export default CreateAccount;
