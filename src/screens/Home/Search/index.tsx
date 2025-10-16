import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import UseInput from '../../../component/Hook/UseInput';
import { useForm } from 'react-hook-form';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS, FONTS } from '../../../constant';
import CustomImg from '../../../component/CustomImage';
import Carousel from 'react-native-reanimated-carousel';
import Label from '../../../component/Label';
import FlatListComponent from '../../../Flatlist';

const SearchScreen: React.FC = props => {
  const [results, setResults] = useState<string[]>([]);
  const { control, watch, setValue } = useForm({
    defaultValues: { search: '' },
  });
  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => (
        <Label
          labelContent={'Home'}
          size={20}
          family={FONTS.PoppinsSemiBold}
          // onPress={props?.navigation?.goBack()}
          mh={15}
        />
      ),
    });
  }, []);

  const handleSearch = (text: string) => {
    // Dummy search logic
    if (text) {
      setResults(
        ['Apple', 'Banana', 'Carrot'].filter(item =>
          item.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setResults([]);
    }
  };
  const templeData = [
    {
      id: '1',
      image: require('../../../assets/images/food.jpg'),
      name: 'Chicken',
    },
    {
      id: '2',
      image: require('../../../assets/images/food1.jpg'),
      name: 'Chicken',
    },
    {
      id: '3',
      image: require('../../../assets/images/food2.jpg'),
      name: 'Chicken',
    },
  ];
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
      </View>
      <ScrollView>
        <View style={{}}>
          <Carousel
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height * 0.3}
            mode="parallax" // 👈 gives that peek effect
            data={templeData}
            scrollAnimationDuration={600}
            modeConfig={{
              parallaxScrollingOffset: 55, // peek size
              parallaxScrollingScale: 0.9, // scale side items
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  flex: 1,
                  marginHorizontal: 5, // space for peek
                }}
              >
                <CustomImg
                  source={item.image}
                  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
              </View>
            )}
          />
        </View>
        <Label
          labelContent={'Trending Recipes'}
          mh={15}
          mt={15}
          color={'#424F54'}
          family={FONTS.PoppinsSemiBold}
          size={18}
        />
        <FlatListComponent
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={templeData}
          horizontal
          renderItem={({ item }) => (
            <View style={{ width: 150, margin: 5 }}>
              <CustomImg
                source={item.image}
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
              <Label
                labelContent={item?.name}
                size={12}
                mt={10}
                family={FONTS.PoppinsMedium}
              />
            </View>
          )}
        />
        <Label
          labelContent={'Trending Cheif'}
          mh={15}
          mt={15}
          color={'#424F54'}
          family={FONTS.PoppinsSemiBold}
          size={18}
        />
        <FlatListComponent
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={templeData}
          horizontal
          renderItem={({ item }) => (
            <CustomImg
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: 'cover',
                margin: 5,
                borderRadius: 10,
              }}
            />
          )}
        />
        <Label
          labelContent={'Trending Cuisine'}
          mh={15}
          mt={15}
          color={'#424F54'}
          family={FONTS.PoppinsSemiBold}
          size={18}
        />
        <FlatListComponent
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={templeData}
          horizontal
          renderItem={({ item }) => (
            <CustomImg
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: 'cover',
                margin: 5,
                borderRadius: 10,
              }}
            />
          )}
        />
        <Label
          labelContent={'Trending Video'}
          mh={15}
          mt={15}
          color={'#424F54'}
          family={FONTS.PoppinsSemiBold}
          size={18}
        />
        <FlatListComponent
          contentContainerStyle={{ paddingHorizontal: 15 }}
          data={templeData}
          horizontal
          renderItem={({ item }) => (
            <CustomImg
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: 'cover',
                margin: 5,
                borderRadius: 10,
              }}
            />
          )}
        />
      </ScrollView>
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
});

export default SearchScreen;
