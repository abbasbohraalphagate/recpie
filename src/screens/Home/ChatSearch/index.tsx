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
import TouchableComponent from '../../../component/TouchableComponent';

const ChatSearch: React.FC = props => {
  const [results, setResults] = useState<string[]>([]);
  const { control, watch, setValue } = useForm({
    defaultValues: { search: '', selectValue: {} },
  });

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
      image: require('../../../assets/images/profile.jpg'),
      name: 'rohan',
      recentMessage: 'hey call me ',
    },
    {
      id: '2',
      image: require('../../../assets/images/profile2.jpg'),
      name: 'mukesh',
      recentMessage: 'hey call me ',
    },
    {
      id: '3',
      image: require('../../../assets/images/profile1.jpg'),
      name: 'divya',
      recentMessage: 'hey call me ',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: COLORS.white, paddingBottom: 10 }}>
        <View
          style={{
            height: 60,
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}
        >
          <Label
            labelContent={'Back'}
            family={FONTS.PoppinsSemiBold}
            color={COLORS.black}
            size={18}
            onPress={() => props?.navigation?.goBack()}
            mt={5}
          />
        </View>
        <UseInput
          control={control}
          name={'search'}
          editable={false}
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
          placeholder="Search People"
          renderRightIcon={() => <Ionicons name="search-outline" size={20} />}
        />
      </View>
      <ScrollView>
        <FlatListComponent
          contentContainerStyle={{ marginTop: 10 }}
          data={templeData}
          renderItem={({ item }) => (
            <TouchableComponent
              onPress={() => setValue('selectValue', item)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
                gap: 12,
                backgroundColor:
                  watch('selectValue')?.name == item?.name
                    ? '#F3F4F9'
                    : 'transparent',
                paddingVertical: 15,
                paddingHorizontal: 15,
                borderLeftWidth:
                  watch('selectValue')?.name == item?.name ? 7 : 7,
                borderLeftColor:
                  watch('selectValue')?.name == item?.name
                    ? '#6CC14E'
                    : 'transparent',
              }}
            >
              <CustomImg
                source={item.image}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Label
                    labelContent={item?.name}
                    size={16}
                    family={FONTS.PoppinsSemiBold}
                  />
                  <Label
                    labelContent={item?.recentMessage}
                    size={14}
                    family={FONTS.PoppinsRegular}
                  />
                </View>
                <Label
                  labelContent={'Yesturday'}
                  size={14}
                  family={FONTS.PoppinsRegular}
                />
              </View>
            </TouchableComponent>
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

export default ChatSearch;
