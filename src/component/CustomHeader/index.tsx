import Ionicons from '@react-native-vector-icons/ionicons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Label from '../Label';
import { COLORS, FONTS } from '../../constant';

const CustomHeader = ({ navigation, title, showBack = true, Options }) => {
  const hasHeaderLeft =
    Options && typeof Options.headerLeft === 'function'
      ? Options.headerLeft()
      : null;

  const hasHeaderRight =
    Options && typeof Options.headerRight === 'function'
      ? Options.headerRight()
      : null;

  const hasTitle =
    Options && typeof Options.headerTitle === 'function'
      ? Options.headerTitle()
      : null;

  return (
    <View style={styles.container}>
      <View style={{ gap: 5, flexDirection: 'row', alignItems: 'center' }}>
        {hasHeaderLeft ? (
          <View style={styles.iconContainer}>{hasHeaderLeft}</View>
        ) : null}

        {hasTitle ? (
          <View style={styles.iconContainer}>{hasTitle}</View>
        ) : (
          <Label
            labelContent={title}
            family={FONTS.PoppinsSemiBold}
            color={COLORS.black}
            size={18}
            onPress={() => navigation?.goBack()}
            mt={0}
          />
        )}
      </View>

      {hasHeaderRight ? (
        <View style={styles.iconContainer}>{hasHeaderRight}</View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 65,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconPlaceholder: { width: 40 },
  title: { fontSize: 18, fontWeight: '600', color: '#000' },
});

export default CustomHeader;
