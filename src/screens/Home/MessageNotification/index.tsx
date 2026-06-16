import React from 'react';
import { View } from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import { Switch } from '@rneui/base';

const MessageNotifications = () => {
  const data = [
    { title: 'Allow Message for all', value: true },
    { title: 'Allow Message for gold', value: false },
    { title: 'Allow Message for platinum', value: false },
    { title: 'Allow Following ', value: false },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        {data?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginBottom: 10,
                paddingHorizontal: 5,
                paddingVertical: 13,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                marginHorizontal: 10,
                borderBottomColor: '#404E55',
              }}
            >
              <Label
                labelContent={item?.title}
                size={16}
                family={FONTS.PoppinsRegular}
                color={'#404E55'}
              />
              <Switch
                value={item?.value}
                thumbColor={item?.value ? COLORS.white : '#007AFF'}
                trackColor={item?.value ? '#4bfa53ff' : '#007AFF'}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default MessageNotifications;
