import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import UseInput from '../../../component/Hook/UseInput';
import { useForm } from 'react-hook-form';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS, FONTS } from '../../../constant';
import CustomImg from '../../../component/CustomImage';
import Carousel from 'react-native-reanimated-carousel';
import Label from '../../../component/Label';
import FlatListComponent from '../../../Flatlist';
import CustomButton from '../../../component/AppButton/GradientButton';
import TouchableComponent from '../../../component/TouchableComponent';
import { Icon } from '@rneui/base';

const Filter: React.FC = props => {
  const [results, setResults] = useState<string[]>([]);
  const { control, watch, setValue } = useForm({
    defaultValues: { search: '', filterData: [], filterId: '' },
  });
  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => {
        return null;
      },
      headerRight: () => (
        <Ionicons name="filter-outline" size={25} color={COLORS.black} />
      ),
    });
  }, []);

  const tabBars = ['Video', 'Recipies', 'Cuisines', 'Chefs'];
  const templeData = [
    {
      id: '1',
      title: 'Difficult',
      child: ['Easy', 'Medium', 'Hard'],
    },
    {
      id: '3',
      title: 'Diets',
      child: ['Vegetarian', 'Vegan', 'Paleo'],
    },
    {
      id: '4',
      title: 'Cooking Time',
      child: ['Under 30 mins', '30 mins to 1 hour', 'Over 1 hour'],
    },
    {
      id: '5',
      title: 'Ingredients',
      child: ['Chicken', 'Beef', 'Vegetables'],
    },
    {
      id: '6',
      title: 'Meal',
      child: ['Breakfast', 'Lunch', 'Dinner'],
    },
    {
      id: '7',
      title: 'Cuisine',
      child: ['Italian', 'Chinese', 'Indian'],
    },
    {
      id: '8',
      title: 'In House Ingredients',
      child: ['Italian', 'Chinese', 'Indian'],
    },
  ];
  const renderData = ({ item }: any) => {
    const isTrue = watch('filterId') == item.id;
    return (
      <View
        style={{
          paddingHorizontal: 15,
          marginBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray2,
          paddingBottom: 10,
        }}
      >
        <Label
          labelContent={item.title}
          color={COLORS.black}
          size={16}
          family={FONTS.PoppinsSemiBold}
          onPress={() => setValue('filterId', item?.id)}
        />
        {isTrue && (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
              marginTop: 10,
            }}
          >
            {item.child.map((childItem: string, childIndex: number) => (
              <TouchableComponent
                onPress={() => {
                  const ids = watch('filterData');

                  if (ids.includes(childItem)) {
                    setValue(
                      'filterData',
                      ids.filter((id: string) => id !== childItem),
                    );
                  } else {
                    setValue('filterData', [...ids, childItem]);
                  }
                }}
                key={childIndex}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  backgroundColor: watch('filterData').includes(childItem)
                    ? COLORS.darkgray
                    : COLORS.lightGray,
                }}
              >
                <Label
                  labelContent={childItem}
                  size={14}
                  color={
                    watch('filterData').includes(childItem)
                      ? COLORS.white
                      : COLORS.darkgray
                  }
                />
              </TouchableComponent>
            ))}
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: COLORS.white, paddingBottom: 10 }}>
        <UseInput
          control={control}
          name={'search'}
          viewStyle={{
            borderWidth: 1,
            borderColor: '#D4D4D4',
            borderRadius: 12,
            marginHorizontal: 15,
          }}
          inputStyle={{}}
          inputContainerStyle={{
            borderRadius: 12,
            backgroundColor: COLORS.white,
            paddingHorizontal: 10,
          }}
          placeholder="Search Recpeis,Chefs& Cusine"
          renderRightIcon={() => <Ionicons name="search-outline" size={20} />}
        />

        <View>
          {watch('filterData').length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 5,
                marginTop: 5,
                marginHorizontal: 5,
              }}
            >
              {watch('filterData').map((item: string, index: number) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    gap: 10,
                  }}
                >
                  <Label
                    labelContent={item}
                    size={14}
                    color={COLORS.darkgray}
                    style={{ marginRight: 5 }}
                  />
                  <TouchableComponent
                    onPress={() => {
                      const ids = watch('filterData');
                      setValue(
                        'filterData',
                        ids.filter((id: string) => id !== item),
                      );
                    }}
                  >
                    <Ionicons
                      name="close-circle"
                      size={16}
                      color={COLORS.gray}
                    />
                  </TouchableComponent>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>

      <FlatListComponent
        contentContainerStyle={{ marginTop: 20 }}
        data={templeData}
        renderItem={renderData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  item: {
    padding: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  divider: {
    width: '90%',
    backgroundColor: COLORS.gray,
    height: 2,
    alignSelf: 'center',
    marginTop: 35,
  },
});

export default Filter;
