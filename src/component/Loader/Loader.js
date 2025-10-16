import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { COLORS, genericStyles } from '../../constant';

const Loader = ({ backgroundColor }) => {
  return (
    <View
      style={[
        genericStyles.fill,
        genericStyles.ai('center'),
        genericStyles.jc('center'),
        genericStyles.bg(backgroundColor ?? COLORS.backgroundColor),
      ]}
    >
      <ActivityIndicator size={25} color={COLORS.primary} />
    </View>
  );
};

export default Loader;
