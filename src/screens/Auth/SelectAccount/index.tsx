import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import Ionicons from '@react-native-vector-icons/ionicons';
import FlatListComponent from '../../../Flatlist';
import CustomImg from '../../../component/CustomImage';
import AppButton from '../../../component/AppButton';
import CustomButtom from '../../../component/AppButton/GradientButton';
import CustomButton from '../../../component/AppButton/GradientButton';

const SelectAccount: React.FC = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <Label
          labelContent={'Back'}
          size={20}
          color={'#424F54'}
          family={FONTS.PoppinsSemiBold}
          onPress={() => props?.navigation?.goBack()}
        />
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Label
            labelContent={'Skip'}
            size={20}
            color={'#424F54'}
            family={FONTS.PoppinsRegular}
          />
          <Ionicons name="arrow-forward" size={25} />
        </View>
      ),
    });
  }, []);
  const users = [
    {
      name: 'jully',
      profile_image: require('../../../assets/images/profile.jpg'),
    },
    {
      name: 'Monali',
      profile_image: require('../../../assets/images/profile1.jpg'),
    },
    {
      name: 'Jurric',
      profile_image: require('../../../assets/images/profile2.jpg'),
    },
    {
      name: 'jully',
      profile_image: require('../../../assets/images/profile.jpg'),
    },
    {
      name: 'Monali',
      profile_image: require('../../../assets/images/profile1.jpg'),
    },
    {
      name: 'Jurric',
      profile_image: require('../../../assets/images/profile2.jpg'),
    },
    {
      name: 'jully',
      profile_image: require('../../../assets/images/profile.jpg'),
    },
    {
      name: 'Monali',
      profile_image: require('../../../assets/images/profile1.jpg'),
    },
    {
      name: 'Jurric',
      profile_image: require('../../../assets/images/profile2.jpg'),
    },
    {
      name: 'jully',
      profile_image: require('../../../assets/images/profile.jpg'),
    },
    {
      name: 'Monali',
      profile_image: require('../../../assets/images/profile1.jpg'),
    },
    {
      name: 'Jurric',
      profile_image: require('../../../assets/images/profile2.jpg'),
    },
    {
      name: 'jully',
      profile_image: require('../../../assets/images/profile.jpg'),
    },
    {
      name: 'Monali',
      profile_image: require('../../../assets/images/profile1.jpg'),
    },
    {
      name: 'Jurric',
      profile_image: require('../../../assets/images/profile2.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 20,
          padding: 10,
          borderRadius: 15,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 2.5,
          shadowRadius: 2.5,
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
          labelContent={'Follow'}
          size={16}
          color={'#EF8E0F'}
          family={FONTS.PoppinsMedium}
        />
        <Label
          textStyle={{ flex: 1 }}
          align={'center'}
          labelContent={'Invite'}
          size={16}
          family={FONTS.PoppinsMedium}
        />
      </View>
      <FlatListComponent
        data={users}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderTopWidth: index == 0 ? 0 : 1,
                borderColor: '#B8B8B8',
                marginTop: 5,
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}
              >
                <CustomImg
                  source={item?.profile_image}
                  style={{ width: 60, height: 60, borderRadius: 50 }}
                />
                <Label
                  labelContent={item?.name}
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
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SelectAccount;
