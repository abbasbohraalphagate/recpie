import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { genericStyles } from '../../constant';

const Label = ({
  underLine,
  disabled,
  labelContent,
  numberOfLines,
  onPress,
  size,
  color,
  family,
  align,
  mv,
  mh,
  lh,
  mt,
  mb,
  fw,
  textStyle,
}: {
  underLine: any;
  disabled: any;
  labelContent: any;
  numberOfLines: any;
  onPress: any;
  size: any;
  color: any;
  family: any;
  align: any;
  mv: any;
  mh: any;
  lh: any;
  mt: any;
  mb: any;
  fw: any;
  textStyle: TextStyle;
}) => {
  return (
    <Text
      disabled={disabled ? disabled : onPress ? false : true}
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        genericStyles.customTitle(
          size,
          color,
          family,
          align,
          mv,
          mh,
          lh,
          mt,
          mb,
          fw,
        ),
        {
          textDecorationLine: underLine ? 'underline' : 'none',
          ...textStyle,
        },
      ]}
    >
      {labelContent}
    </Text>
  );
};

export default Label;
