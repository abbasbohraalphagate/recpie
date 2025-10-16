import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import Label from './index';
import { COLORS, genericStyles } from '../../constant';

const RowLabel = ({
  family,
  color1,
  color2,
  viewStye,
  touchStyle1,
  touchStyle2,
  firstLabel,
  secondLabel,
  onFirstTouch,
  numberOfLines,
  numberOfLinesRow2,
  firstLabelSize,
  secondLabelSize,
  family1,
  align1,
  align2,
  onSecondTouch,
  showTruncate,
  showTruncate1,
}: {
  family: any;
  color1: String;
  color2: String;
  viewStye: ViewStyle;
  touchStyle1: TextStyle;
  touchStyle2: TextStyle;
  firstLabel: String;
  secondLabel: String;
  onFirstTouch: () => void;
  numberOfLines: number;
  numberOfLinesRow2: number;
  firstLabelSize: number;
  secondLabelSize: number;
  family1: String;
  align1: String;
  align2: String;
  onSecondTouch: () => void;
  showTruncate: boolean;
  showTruncate1: boolean;
}) => {
  return (
    <View style={[genericStyles.row, { ...viewStye }]}>
      <Label
        color={color1 ?? COLORS.darkgray}
        family={family}
        align={align1}
        size={firstLabelSize}
        onPress={onFirstTouch}
        textStyle={touchStyle1}
        labelContent={firstLabel}
        numberOfLines={numberOfLines}
        showTruncate={showTruncate}
      />
      <Label
        family={family1}
        align={align2}
        color={color2}
        onPress={onSecondTouch}
        size={secondLabelSize}
        textStyle={touchStyle2}
        labelContent={secondLabel}
        showTruncate={showTruncate1}
        numberOfLines={numberOfLinesRow2}
      />
    </View>
  );
};

export default RowLabel;
