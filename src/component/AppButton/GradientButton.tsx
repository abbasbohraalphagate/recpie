import React from 'react';
import { StyleSheet, View, ActivityIndicator, ViewStyle } from 'react-native';
import TouchableComponent from '../TouchableComponent';
import { COLORS, FONTS, genericStyles } from '../../constant';
import Label from '../Label';

const CustomButton = ({
  title,
  onPress,
  loading,
  disabled,
  textSize,
  linerStyle,
  showArrows,
  changeColor,
  containerStyle,
  ShowLeft,
  textAlign,
  bottomLabel,
  textFamily,
  colors,
  textColor,
  icon,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  textSize?: number;
  linerStyle?: any;
  showArrows?: boolean;
  changeColor?: boolean;
  containerStyle?: ViewStyle;
  ShowLeft?: () => React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  bottomLabel?: string;
  textFamily?: string;
  colors: string[];
  textColor: String;
  icon: any;
}) => {
  return (
    <TouchableComponent
      onPress={onPress}
      disabled={disabled}
      style={{ ...containerStyle }}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <View style={{ ...genericStyles.rowWithCenter }}>
          {icon && icon}
          <View>
            <Label
              size={textSize ?? 14}
              color={textColor ?? COLORS.white}
              align={textAlign}
              labelContent={title}
              family={FONTS.PoppinsMedium}
            />
            {bottomLabel && (
              <Label
                size={textSize ?? 12}
                family={FONTS.PoppinsRegular}
                color={COLORS.white}
                align={textAlign}
                labelContent={bottomLabel}
              />
            )}
          </View>
        </View>
      )}
    </TouchableComponent>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 13,
    paddingVertical: 11,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
