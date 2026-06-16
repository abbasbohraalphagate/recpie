import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import CustomImg from '../../../component/CustomImage';
import Ionicons from '@react-native-vector-icons/ionicons';
import FlatListComponent from '../../../Flatlist';
import TouchableComponent from '../../../component/TouchableComponent';
import { Icon } from '@rneui/base';
import CustomButton from '../../../component/AppButton/GradientButton';

const UserProfile: React.FC = props => {
  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => (
        <Label
          labelContent={'Back'}
          size={20}
          family={FONTS.PoppinsSemiBold}
          // onPress={props?.navigation?.goBack()}
          mh={15}
        />
      ),
      headerRight: () => (
        <Label
          labelContent={'@samiti_varma'}
          size={14}
          color={'#EE8C0E'}
          family={FONTS.PoppinsSemiBold}
          // onPress={props?.navigation?.goBack()}
          mh={15}
        />
      ),
    });
  }, []);

  const detail = [
    { title: 'RECIPIES', value: 563 },
    { title: 'POSTS', value: 563 },
    { title: 'FOLLOWERS', value: '1M' },
    { title: 'FOLLOWING', value: 563 },
  ];
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

  const images = [
    require('../../../assets/images/profile.jpg'),
    require('../../../assets/images/profile1.jpg'),
    require('../../../assets/images/profile2.jpg'),
    require('../../../assets/images/food1.jpg'),
    require('../../../assets/images/food2.jpg'),
    require('../../../assets/images/food.jpg'),
    require('../../../assets/images/profile.jpg'),
    require('../../../assets/images/profile1.jpg'),
    require('../../../assets/images/profile2.jpg'),
    require('../../../assets/images/food1.jpg'),
    require('../../../assets/images/food2.jpg'),
    require('../../../assets/images/food.jpg'),
  ];

  const buttons = [
    { title: 'Follow', Icon: 'albums-outline' },
    { title: 'Message', Icon: 'chatbox-ellipses-outline' },
    { title: 'Contact', Icon: 'person-add-outline' },
  ];

  const suggestion = [
    {
      image: require('../../../assets/images/profile.jpg'),
      name: 'larul',
      userName: 'Mar tin karul',
    },
    {
      image: require('../../../assets/images/profile.jpg'),
      name: 'larul',
      userName: 'Mar tin karul',
    },
    {
      image: require('../../../assets/images/profile.jpg'),
      name: 'larul',
      userName: 'Mar tin karul',
    },
  ];

  const renderSuggestions = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          width: 180,
          backgroundColor: COLORS.white,
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <CustomImg
          source={item?.image}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Label labelContent={item?.name} size={16} align={'center'} />
        <Label labelContent={item?.userName} size={14} align={'center'} />
        <CustomButton
          title="Follow"
          containerStyle={{
            backgroundColor: COLORS.gray,
            alignItems: 'center',
            padding: 5,
            borderRadius: 20,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}
          icon={
            <Ionicons
              name="albums-outline"
              style={{ marginRight: 5 }}
              size={20}
              color={COLORS.white}
            />
          }
        />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <TouchableComponent
          onPress={() => props?.navigation?.navigate('EditProfile')}
        >
          <CustomImg
            source={require('../../../assets/images/profile.jpg')}
            style={{ width: 85, height: 85, borderRadius: 50 }}
          />
          <Ionicons
            name="create"
            size={25}
            color={'#EE8C0E'}
            style={{ position: 'absolute', bottom: 15, right: -10 }}
          />
        </TouchableComponent>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View>
            <Label
              labelContent={'Kati Smith'}
              size={14}
              color={'#424F54'}
              family={FONTS.PoppinsBold}
            />
            <Label
              mv={0}
              labelContent={'Tv Celebrity Chef'}
              size={12}
              family={FONTS.PoppinsMedium}
              color={COLORS.gray}
            />
            <Label
              mv={0}
              labelContent={'3 michelin start'}
              size={12}
              family={FONTS.PoppinsMedium}
              color={COLORS.gray}
            />
            <Label
              mv={0}
              labelContent={'Cooking classic british dish'}
              size={12}
              family={FONTS.PoppinsMedium}
              color={COLORS.gray}
            />
          </View>
          <Ionicons
            name="settings"
            onPress={() => props?.navigation?.navigate('Settings')}
            size={25}
            color={COLORS.black2}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {detail?.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  borderRightWidth: 2,
                  height: 40,
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  borderRightColor: '#DDD6C7',
                }}
              >
                <Label labelContent={item?.value} align={'center'} />
                <Label labelContent={item?.title} size={12} />
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: 20 }}
      >
        {buttons?.map((item, index) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                gap: 10,
              }}
            >
              <Ionicons name={item?.Icon} size={35} />
              <Label labelContent={item?.title} size={16} />
            </View>
          );
        })}
      </View>
      <Label
        labelContent={'Suggestions for you'}
        mh={15}
        mt={15}
        color={'#424F54'}
        family={FONTS.PoppinsSemiBold}
        size={16}
      />
      <FlatListComponent
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10, gap: 5 }}
        data={suggestion}
        renderItem={renderSuggestions}
      />
      <Label
        labelContent={'Cookbooks'}
        mh={15}
        mt={25}
        color={'#424F54'}
        family={FONTS.PoppinsSemiBold}
        size={16}
      />
      <View>
        <FlatListComponent
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          data={templeData}
          horizontal
          renderItem={({ item }) => (
            <ImageBackground
              source={item.image}
              borderRadius={8}
              style={{
                width: 150,
                margin: 5,
                height: 120,
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 120,
                  backgroundColor: '#96969695',
                  position: 'absolute',
                  zIndex: 1,
                  borderRadius: 8,
                  justifyContent: 'flex-end',
                  paddingHorizontal: 10,
                }}
              >
                <Label
                  labelContent={'SNACKS'}
                  color={COLORS.white}
                  family={FONTS.PoppinsBold}
                  size={16}
                  mv={0}
                />
                <Label
                  labelContent={'3 RECIPIES'}
                  color={'#FFEB01'}
                  size={16}
                  family={FONTS.PoppinsBold}
                  mt={0}
                />
              </View>
            </ImageBackground>
          )}
        />
      </View>
      <View
        style={{
          marginHorizontal: 15,
          padding: 10,
          borderRadius: 12,

          backgroundColor: COLORS.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}
      >
        <Label
          textStyle={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: '#B8B8B8',
          }}
          align={'center'}
          labelContent={'Regular'}
          size={16}
          color={'#EF8E0F'}
          family={FONTS.PoppinsMedium}
        />
        <Label
          textStyle={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: '#B8B8B8',
          }}
          align={'center'}
          labelContent={'Gold'}
          size={16}
          color={'#EF8E0F'}
          family={FONTS.PoppinsMedium}
        />
        <Label
          textStyle={{ flex: 1 }}
          align={'center'}
          labelContent={'Premium'}
          size={16}
          family={FONTS.PoppinsMedium}
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 }}>
        {images?.map((item, index) => {
          return (
            <CustomImg
              key={index}
              source={item}
              style={{ width: Dimensions.get('window').width / 3, height: 150 }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserProfile;
