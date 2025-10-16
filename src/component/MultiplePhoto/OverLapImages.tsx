import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomImg from '../CustomImage';

const OverlappingAvatars = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar, index) => (
        <View
          key={index}
          style={[
            styles.avatarContainer,
            { left: index * -8 }, // overlap amount
          ]}
        >
          <CustomImg
            source={avatar.uri ? { uri: avatar.uri } : avatar}
            style={styles.avatar}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    // position: 'absolute',
  },
  avatar: {
    width: 27,
    height: 27,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default OverlappingAvatars;
