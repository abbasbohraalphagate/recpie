import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Input } from '@rneui/themed';
import { COLORS, FONTS, genericStyles } from '../../constant';
import Label from '../Label/index';
import TouchableComponent from '../TouchableComponent';
import RowLabel from '../Label/RowLabel';

const InputComponent = ({
  viewStyle,
  placeholder,
  iconName,
  iconSize,
  errorStyle,
  inputContainerStyle,
  inputStyle,
  containerStyle,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  onSubmitEditing,
  ref,
  iconOnpress,
  secureTextEntry,
  multiline,
  iconColor,
  autoCapitalize,
  onKeyPress,
  autoFocus,
  numberOfLines,
  onblur,
  errorMessage,
  iconContainerStyle,
  onChange,
  textContentType,
  editable,
  disabled,
  placeholderTextColor,
  leftIconName,
  textAlignVertical,
  topLabel,
  cursorColor,
  labelFamily,
  onPressIn,
  leftIconType,
  rightIconType,
  iconOnpress1,
  BottomLabel,
  renderLeftIcon,
  renderRightIcon,
  onPress,
  showRow,
  RowText,
}) => {
  return (
    <View style={viewStyle}>
      {showRow ? (
        <RowLabel
          firstLabel={topLabel}
          secondLabel={RowText}
          color1={'#505050'}
          color2={COLORS.red}
          viewStye={genericStyles.mb(10)}
        />
      ) : (
        topLabel && (
          <Label
            mb={10}
            size={13}
            color={'#505050'}
            family={labelFamily}
            labelContent={topLabel}
          />
        )
      )}
      <Input
        placeholder={placeholder ?? ''}
        editable={editable}
        onPressIn={onPressIn}
        cursorColor={cursorColor}
        placeholderTextColor={placeholderTextColor ?? COLORS.textGray}
        containerStyle={[genericStyles.ph(0), { ...containerStyle }]}
        textAlignVertical={textAlignVertical}
        inputContainerStyle={[
          styles.inputContainerStyle,
          { ...inputContainerStyle },
        ]}
        leftIcon={renderLeftIcon ? renderLeftIcon : null}
        inputStyle={[styles.inputStyle, { ...inputStyle }]}
        errorStyle={{ ...errorStyle, display: 'none' }}
        rightIcon={renderRightIcon ? renderRightIcon : null}
        onChange={onChange}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength ?? 30}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize ?? 'none'}
        multiline={multiline}
        disabled={disabled}
        onKeyPress={onKeyPress}
        autoFocus={autoFocus}
        numberOfLines={numberOfLines}
        onBlur={onblur}
        errorMessage={errorMessage}
        textContentType={textContentType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: FONTS.PoppinsRegular,
    color: COLORS.textGray,
    fontSize: 15,
  },
  inputContainerStyle: {
    // height: 50,
    borderRadius: 5,
    borderBottomWidth: 0,
    backgroundColor: '#F5F5F5',
  },
});

export default InputComponent;
