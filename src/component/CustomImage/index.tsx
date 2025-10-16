import { ActivityIndicator, ImageStyle, ViewStyle } from 'react-native';
import React from 'react';
import { Image } from '@rneui/themed';
import { COLORS, genericStyles } from '../../constant';

const CustomImg = ({
  source,
  style,
  containerStyle,
  onPress,
  contain,
  image,
  borderRadius,
}: {
  source: any;
  style: ImageStyle;
  containerStyle: ViewStyle;
  onPress?: () => void;
  contain?: boolean;
  image?: any;
  borderRadius?: number;
}) => {
  return (
    <Image
      style={style}
      onPress={onPress}
      source={source}
      borderRadius={borderRadius}
      //   resizeMode={contain ? 'contain' : 'cover'}
      containerStyle={containerStyle}
      placeholderStyle={
        image ? style : [genericStyles.fill, genericStyles.bg(COLORS.white)]
      }
      PlaceholderContent={
        image ? (
          <Image
            style={{ ...style }}
            source={require('../../assets/images/noImage.jpg')}
          />
        ) : (
          <ActivityIndicator color={COLORS.primary} />
        )
      }
    />
  );
};

export default CustomImg;
