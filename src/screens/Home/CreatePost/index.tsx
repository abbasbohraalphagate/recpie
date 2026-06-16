import Fontisto from '@react-native-vector-icons/fontisto';
import Ionicons from '@react-native-vector-icons/ionicons';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { COLORS, FONTS } from '../../../constant';
import Label from '../../../component/Label';
import TouchableComponent from '../../../component/TouchableComponent';

const CreatePost = props => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = () => {
    // Handle post creation logic here
    console.log('Post Created:', { title, content });
  };
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
  const options = [
    { name: 'RECIPE', icon: 'clipboard-outline', navigation: 'CreateRecpie' },
    { name: 'TIP', icon: 'bulb-outline', navigation: 'CreateTip' },
    { name: 'POST', icon: 'document-text-outline', navigation: 'Post' },
    { name: 'LIVE', icon: 'videocam', navigation: 'CreateLive' },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 0,
          justifyContent: 'center',
          marginTop: 15,
        }}
      >
        {options?.map((item, index) => {
          return (
            <TouchableComponent
              onPress={() => props?.navigation?.navigate(item?.navigation)}
              style={{
                padding: 20,
                borderRadius: 8,

                backgroundColor: COLORS.white,
                width: Dimensions.get('window').width / 2.3,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                height: 150,
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 2.5,
                shadowRadius: 2,
              }}
            >
              <Ionicons name={item?.icon} size={30} color={COLORS.lightGray2} />
              <Label
                labelContent={item?.name}
                size={16}
                family={FONTS.PoppinsBold}
              />
            </TouchableComponent>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default CreatePost;
