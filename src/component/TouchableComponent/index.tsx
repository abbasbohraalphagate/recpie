import { Pressable, ViewStyle } from 'react-native';
import React from 'react';

const TouchableComponent = ({
  onPress,
  activeOpacity,
  children,
  style,
  disabled,
}: {
  onPress: () => void;
  activeOpacity: number;
  children: any;
  style: ViewStyle;
  disabled: boolean;
}) => {
  return (
    <Pressable
      style={style}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity ?? 0.8}
    >
      {children}
    </Pressable>
  );
};

export default TouchableComponent;
