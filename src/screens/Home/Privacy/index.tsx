import React from 'react';
import { View } from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import Fontisto from '@react-native-vector-icons/fontisto';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Switch } from '@rneui/themed';

const Privacy = () => {
  const data = [
    { title: 'Allow Comment from', Value: 'Everyone' },
    { title: 'Block Comment from', Value: '0 People' },
  ];
  const data1 = [{ title: 'Allow Other To Reshape', Value: false }];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
        <Label labelContent={'Control'} family={FONTS.PoppinsBold} size={16} />
        {data?.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingVertical: 10,
              }}
            >
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Fontisto name="caret-down" size={20} />
                <Label labelContent={item?.title} size={16} />
              </View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Label labelContent={item?.Value} size={16} />
                <Ionicons name="chevron-forward" size={20} />
              </View>
            </View>
          );
        })}
        <Label
          labelContent={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
          size={12}
          mh={10}
          mt={15}
          align={'center'}
        />
        <View
          style={{
            backgroundColor: COLORS.lightGray2,
            width: '90%',
            height: 1,
            alignSelf: 'center',
            marginTop: 50,
            marginBottom: 20,
          }}
        />
        <Label labelContent={'Share'} family={FONTS.PoppinsBold} size={16} />
        {data1?.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingVertical: 10,
              }}
            >
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Fontisto name="caret-down" size={20} />
                <Label labelContent={item?.title} size={16} />
              </View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Label labelContent={item?.Value} size={16} />
                <Switch
                  value={item?.value}
                  thumbColor={item?.value ? COLORS.white : '#007AFF'}
                  trackColor={item?.value ? '#4bfa53ff' : '#007AFF'}
                />
              </View>
            </View>
          );
        })}
        <Label
          labelContent={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
          size={12}
          mh={10}
          mt15
          align={'center'}
        />
      </View>
    </View>
  );
};
export default Privacy;
