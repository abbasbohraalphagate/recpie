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

const MainSearch: React.FC = props => {
  const [results, setResults] = useState<string[]>([]);
  const { control, watch, setValue } = useForm({
    defaultValues: { search: '', tab: '' },
  });
  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => {
        return null;
      },
      headerRight: () => (
        <Ionicons
          name="filter-outline"
          size={25}
          color={COLORS.black}
          onPress={() => props?.navigation?.navigate('Filter')}
        />
      ),
    });
  }, []);

  const tabBars = ['Video', 'Recipies', 'Cuisines', 'Chefs'];
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

  const renderVideo = ({ item, index }) => {
    return (
      <View style={{ marginBottom: 25 }}>
        <View style={styles.mainContainer}>
          <CustomImg
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={require('../../../assets/images/profile1.jpg')}
          />

          <View style={styles.profile}>
            <View style={{ flex: 1 }}>
              <Label
                labelContent={'Priyanka Marcel'}
                family={FONTS.PoppinsSemiBold}
              />
              <Label
                labelContent={'Fast food of burger popcorn and cocke'}
                textStyle={{}}
                numberOfLines={2}
              />
            </View>
            <Label labelContent={item?.time} size={15} />
          </View>
        </View>
        <ImageBackground
          source={item.image}
          style={{
            width: '100%',
            height: Dimensions.get('window').height / 1.5,
            resizeMode: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="play-circle" color={COLORS.white} size={65} />
        </ImageBackground>
        <View style={styles.divider} />
      </View>
    );
  };
  const renderRecipies = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          alignItems: 'center',
          gap: 12,
        }}
      >
        <CustomImg
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={require('../../../assets/images/profile1.jpg')}
        />
        <View style={styles.profile}>
          <View style={{ flex: 1 }}>
            <Label
              labelContent={
                'Chicken burger with chili souce and red chilinpaer with extra mausones'
              }
              family={FONTS.PoppinsSemiBold}
            />
          </View>
          <Ionicons name="happy-outline" color={COLORS.black} size={40} />
        </View>
      </View>
    );
  };
  const renderCuisines = ({ item, index }) => {
    return (
      <View
        style={{ width: 190, marginBottom: 10, marginHorizontal: 8 }}
        key={index}
      >
        <ImageBackground
          source={item.image}
          style={{
            width: '100%',
            height: 250,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 20,
          }}
          borderRadius={8}
        >
          <Label
            labelContent={'Thai'}
            color={COLORS.white}
            family={FONTS.PoppinsBold}
            size={25}
          />
        </ImageBackground>
      </View>
    );
  };

  const renderChefs = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          borderTopWidth: index == 0 ? 0 : 1,
          borderColor: '#B8B8B8',
          marginBottom: 10,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <CustomImg
            source={require('../../../assets/images/profile1.jpg')}
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
          <Label
            labelContent={'Marchel flotu'}
            family={FONTS.PoppinsRegular}
            size={16}
          />
        </View>
        <CustomButton
          title="Follow"
          textColor={'#6CC14E'}
          containerStyle={{
            // backgroundColor: '#6CC14E',
            backgroundColor: COLORS.white,

            paddingHorizontal: 25,
            paddingVertical: 6,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#6CC14E',
          }}
        />
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
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        {tabBars?.map((item, index) => {
          return (
            <View
              style={{
                flex: 1,
                paddingVertical: 10,
                borderBottomWidth: watch('tab') === item ? 4 : 2,
                borderBottomColor:
                  watch('tab') === item ? '#EF8E0F' : '#F0F0F5',
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}
              key={index}
            >
              <Label
                labelContent={item}
                color={COLORS.black}
                align={'center'}
                size={16}
                onPress={() => setValue('tab', item)}
              />
            </View>
          );
        })}
      </View>
      <ScrollView>
        {watch('tab') == 'Video' && (
          <FlatListComponent data={templeData} renderItem={renderVideo} />
        )}

        {watch('tab') == 'Recipies' && (
          <FlatListComponent
            data={templeData}
            renderItem={renderRecipies}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        )}

        {watch('tab') == 'Cuisines' && (
          <FlatListComponent
            numColumns={2}
            data={templeData}
            renderItem={renderCuisines}
            contentContainerStyle={{}}
          />
        )}

        {watch('tab') == 'Chefs' && (
          <FlatListComponent
            data={templeData}
            renderItem={renderChefs}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        )}
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

export default MainSearch;
