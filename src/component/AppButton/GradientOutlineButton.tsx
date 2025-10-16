import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Label from '../Label';
import { COLORS, FONTS } from '../../constant';
import TouchableComponent from '../TouchableComponent';

const GradientOutlineButton = ({
  title,
  onPress,
  disabled,
  textSize,
  linerStyle,
  containerStyle,
  whiteContainerStyle,
  textColor,
  textAlign,
  icon,
  family,
}: {
  title: String;
  onPress: () => void;
  disabled: boolean;
  textSize: number;
  linerStyle: ViewStyle;
  containerStyle: ViewStyle;
  whiteContainerStyle: ViewStyle;
  textColor: String;
  textAlign: String;
  icon: any;
  family: String;
}) => {
  return (
    <TouchableComponent
      onPress={onPress}
      disabled={disabled}
      style={containerStyle}
    >
      <View style={[styles.whiteContainer, { ...whiteContainerStyle }]}>
        {icon && icon}
        <Label
          mh={5}
          size={textSize ?? 14}
          color={textColor ?? COLORS.black}
          align={textAlign}
          labelContent={title}
          family={family ?? FONTS.DancingScriptRegular}
          // family={textFamily ?? FONTS.AvenirNextCyrMedium500}
        />
      </View>
    </TouchableComponent>
  );
};

export default GradientOutlineButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 1.5,
    borderRadius: 35,
  },
  whiteContainer: {
    paddingHorizontal: 13,
    borderRadius: 35,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
});
