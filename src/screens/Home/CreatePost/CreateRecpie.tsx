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
import { COLORS } from '../../../constant';

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
    <ScrollView style={styles.container}>
      <Label labelContent={'Photo And Videos'} />

      <View
        style={{
          marginHorizontal: 35,
          padding: 15,
          marginTop: 25,
          borderRadius: 8,
          borderStyle: 'dashed',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="add" color={COLORS.primary} size={50} />
      </View>

      <Text style={styles.header}>Create New Recipe</Text>

      <TextInput
        style={styles.input}
        placeholder="Recipe Title"
        value={recipe.title}
        onChangeText={text => setRecipe(prev => ({ ...prev, title: text }))}
      />

      <Text style={styles.subHeader}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Ingredient ${index + 1}`}
          value={ingredient}
          onChangeText={text => {
            const newIngredients = [...recipe.ingredients];
            newIngredients[index] = text;
            setRecipe(prev => ({ ...prev, ingredients: newIngredients }));
          }}
        />
      ))}

      <TouchableOpacity style={styles.addButton} onPress={handleAddIngredient}>
        <Text style={styles.buttonText}>Add Ingredient</Text>
      </TouchableOpacity>

      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Instructions"
        multiline
        value={recipe.instructions}
        onChangeText={text =>
          setRecipe(prev => ({ ...prev, instructions: text }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Cooking Time (in minutes)"
        value={recipe.cookingTime}
        onChangeText={text =>
          setRecipe(prev => ({ ...prev, cookingTime: text }))
        }
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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
});

export default CreateRecipe;
