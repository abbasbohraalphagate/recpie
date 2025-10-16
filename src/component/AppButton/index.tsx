import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { COLORS, FONTS } from '../../constant';

const AppButton = ({
  disabledTitleStyle,
  containerStyle,
  disabledStyle,
  buttonStyle,
  titleStyle,
  disabled,
  btnType,
  onPress,
  loading,
  title,
  loadingProps,
  children,
}) => {
  return (
    <Button
      title={title}
      type={btnType}
      loading={loading}
      onPress={onPress}
      children={children}
      disabled={disabled}
      loadingProps={loadingProps}
      disabledStyle={disabledStyle}
      containerStyle={containerStyle}
      disabledTitleStyle={disabledTitleStyle}
      titleStyle={[styles.titleStyle, { ...titleStyle }]}
      buttonStyle={[styles.buttonStyle, { ...buttonStyle }]}
    />
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
  },
  titleStyle: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.CabinSemiBold600,
  },
});
