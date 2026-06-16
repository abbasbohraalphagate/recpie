import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Label from '../../../component/Label';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS, FONTS } from '../../../constant';
import { useForm } from 'react-hook-form';
import UseInput from '../../../component/Hook/UseInput';
import UseDropDown from '../../../component/Hook/UseDropDown';
import CustomButton from '../../../component/AppButton/GradientButton';

interface RecipeData {
  title: string;
  ingredients: string[];
  instructions: string;
  cookingTime: string;
}

const Post: React.FC = () => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',

      instruction: '',
    },
  });

  const handleSubmit = () => {
    // Handle recipe submission logic here
    console.log('Recipe submitted:', recipe);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Label
          labelContent={'Photo And Videos'}
          size={18}
          mb={10}
          mt={20}
          align={'center'}
        />

        <View
          style={{
            marginHorizontal: 35,
            padding: 15,
            borderRadius: 15,
            borderStyle: 'dashed',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 1,
            height: 120,
            width: 130,
            alignSelf: 'center',
          }}
        >
          <Ionicons name="add" color={COLORS.primary} size={50} />
        </View>

        <UseInput
          control={control}
          name={'title'}
          placeholder="Title"
          containerStyle={{ marginTop: 10, backgroundColor: COLORS.white }}
          inputContainerStyle={{
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          style={styles.input}
          placeholder={`Description(enter#'s to link to cuisines)`}
          value={watch('description')}
          onChangeText={text => setValue('description', text)}
          multiline
        />
      </ScrollView>
      <CustomButton
        title="Post "
        textSize={16}
        textColor={COLORS.white}
        containerStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    borderRadius: 11,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 150,
    backgroundColor: COLORS.lightGray,
    marginTop: 10,
    textAlignVertical: 'top',
    fontFamily: FONTS.PoppinsRegular,
    color: COLORS.textGray,
    fontSize: 15,
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

export default Post;
