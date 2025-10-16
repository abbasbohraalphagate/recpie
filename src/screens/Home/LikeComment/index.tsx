import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FlatListComponent from '../../../Flatlist';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import RowLabel from '../../../component/Label/RowLabel';

interface LikeCommentProps {
  likes: number;
  comments: number;
  onLike: () => void;
  onComment: () => void;
}

const LikeComment: React.FC<LikeCommentProps> = props => {
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
    });
  }, []);
  const data = [
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Today',
    },
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Monday',
    },
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Tuesday',
    },
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Wednesday',
    },
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Friday',
    },
    {
      info1: { username: 'Chef_harry', value: 'Saved your recipe to co...' },
      info2: { username: 'Chef_max +6', value: 'Comment on your recipe' },
      info3: { username: 'Chef_harry +3', value: 'rated your recipe' },
      info4: { username: 'Chef_mark +1', value: 'Comment on your recipe ' },
      date: 'Sunday',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatListComponent
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: Dimensions.get('window').width / 2.6,
                    height: 1,
                    backgroundColor: COLORS.lightGray2,
                  }}
                />
                <View
                  style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: 20,
                    width: 105,
                    paddingHorizontal: 5,
                    paddingVertical: 4,
                  }}
                >
                  <Label labelContent={item?.date} size={11} align={'center'} />
                </View>
                <View
                  style={{
                    width: Dimensions.get('window').width / 2,
                    height: 1,
                    backgroundColor: COLORS.lightGray2,
                  }}
                />
              </View>
              <View style={{ paddingVertical: 12 }}>
                <RowLabel
                  viewStye={{
                    marginHorizontal: 10,
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                  firstLabel={item?.info1?.username + ' '}
                  family={FONTS.PoppinsBold}
                  color1={'#424F54'}
                  firstLabelSize={16}
                  secondLabel={item?.info1?.value}
                  family1={FONTS.PoppinsRegular}
                  secondLabelSize={16}
                />
                <RowLabel
                  viewStye={{
                    marginHorizontal: 10,
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                  firstLabel={item?.info2?.username + ' '}
                  family={FONTS.PoppinsBold}
                  color1={'#424F54'}
                  firstLabelSize={16}
                  secondLabel={item?.info2?.value}
                  family1={FONTS.PoppinsRegular}
                  secondLabelSize={16}
                />
                <RowLabel
                  viewStye={{
                    marginHorizontal: 10,
                    alignItems: 'center',

                    marginTop: 10,
                  }}
                  firstLabel={item?.info3?.username + ' '}
                  family={FONTS.PoppinsBold}
                  color1={'#424F54'}
                  firstLabelSize={16}
                  secondLabel={item?.info3?.value}
                  family1={FONTS.PoppinsRegular}
                  secondLabelSize={16}
                />
                <RowLabel
                  viewStye={{
                    marginHorizontal: 10,
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                  firstLabel={item?.info4?.username + ' '}
                  family={FONTS.PoppinsBold}
                  color1={'#424F54'}
                  firstLabelSize={16}
                  secondLabel={item?.info4?.value}
                  family1={FONTS.PoppinsRegular}
                  secondLabelSize={16}
                />
              </View>
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
  },
  button: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
  },
});

export default LikeComment;
