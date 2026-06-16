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

const CreateRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<RecipeData>({
    title: '',
    ingredients: [''],
    instructions: '',
    cookingTime: '',
  });
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

  const handleAddIngredient = () => {
    setRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, ''],
    }));
  };

  const handleSubmit = () => {
    // Handle recipe submission logic here
    console.log('Recipe submitted:', recipe);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        placeholder="Add a comment..."
        value={watch('description')}
        onChangeText={text => setValue('description', text)}
        multiline
      />
      <Label
        labelContent={'Ingredients'}
        size={18}
        mb={10}
        mt={20}
        family={FONTS.PoppinsBold}
      />
      {watch('ingredients')?.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <UseInput
              placeholder={`Ingredients${index + 1}`}
              control={control}
              name={item?.name}
              viewStyle={{ width: '55%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
            <UseInput
              control={control}
              placeholder="Amount"
              name={item?.amount}
              viewStyle={{ width: '40%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
          </View>
        );
      })}
      <Label
        labelContent={'+ Add ingredient'}
        size={18}
        mt={10}
        family={FONTS.PoppinsBold}
        mh={20}
        color={'#f8781e'}
        onPress={() =>
          setValue('ingredients', [
            ...watch('ingredients'),
            { name: '', amount: '' },
          ])
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Instructions..."
        value={watch('description')}
        onChangeText={text => setValue('instruction', text)}
        multiline
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Label
            labelContent={'Prep Time: '}
            size={16}
            family={FONTS.PoppinsBold}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <UseInput
              control={control}
              name="prepMin"
              viewStyle={{ width: '20%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
            <Label labelContent={'mins'} family={FONTS.PoppinsSemiBold} />
            <UseInput
              control={control}
              name="prepHour"
              viewStyle={{ width: '20%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
            <Label labelContent={'hours'} family={FONTS.PoppinsSemiBold} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Label
            labelContent={'Cooking Time: '}
            size={16}
            family={FONTS.PoppinsBold}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <UseInput
              control={control}
              name="cookingMin"
              viewStyle={{ width: '20%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
            <Label labelContent={'mins'} family={FONTS.PoppinsSemiBold} />
            <UseInput
              control={control}
              name="cookingHour"
              viewStyle={{ width: '20%' }}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            />
            <Label labelContent={'hours'} family={FONTS.PoppinsSemiBold} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            gap: 10,
          }}
        >
          <Label
            labelContent={'Difficulty level: '}
            size={16}
            family={FONTS.PoppinsBold}
          />
          <UseDropDown
            control={control}
            name="cookingMin"
            dropDownStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            placeholder="Beginner"
            data={[]}
            container={{
              width: '50%',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            gap: 10,
          }}
        >
          <Label
            labelContent={'Serving size: '}
            size={16}
            family={FONTS.PoppinsBold}
          />
          <UseInput
            control={control}
            name="servingSize"
            viewStyle={{ width: '20%' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          gap: 10,
        }}
      >
        <Label
          labelContent={'Dietary Requirement: '}
          size={16}
          family={FONTS.PoppinsBold}
        />
        <UseDropDown
          control={control}
          name="cookingMin"
          dropDownStyle={{
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          placeholder="Beginner"
          data={[]}
          container={{
            width: '40%',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          gap: 10,
        }}
      >
        <Label
          labelContent={'Gluten free: '}
          size={16}
          family={FONTS.PoppinsBold}
        />
        <Ionicons name="square-outline" size={25} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          gap: 10,
        }}
      >
        <Label
          labelContent={'Nut free: '}
          size={16}
          family={FONTS.PoppinsBold}
        />
        <Ionicons name="checkbox-outline" size={25} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          gap: 10,
        }}
      >
        <Label labelContent={'Spice'} size={16} family={FONTS.PoppinsBold} />
        <UseDropDown
          control={control}
          name="cookingMin"
          dropDownStyle={{
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          placeholder="Beginner"
          data={[]}
          container={{
            width: '40%',
          }}
        />
      </View>

      <CustomButton
        title="Post "
        textSize={16}
        textColor={COLORS.white}
        containerStyle={styles.button}
      />
    </ScrollView>
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
    height: 100,
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

export default CreateRecipe;
