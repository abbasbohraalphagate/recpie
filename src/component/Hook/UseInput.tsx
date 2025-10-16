import React from 'react';
import { Controller } from 'react-hook-form';
import InputComponent from '../CustomInput';
import { COLORS } from '../../constant';
import { ViewStyle } from 'react-native';
import { IconProps } from '@rneui/base';

interface UseInputProps {
  max?: number;
  min?: number;
  name?: any;
  control?: any;
  pattern?: RegExp;
  editable?: boolean;
  required?: boolean;
  maxLength?: number;
  multiline?: boolean;
  placeholder?: string;
  removeRegex?: RegExp;
  keyboardType?: any;
  defaultValue?: string;
  ruleMinLength?: number;
  ruleMaxLength?: number;
  numberOfLines?: number;
  renderLeftIcon?: IconProps;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  iconName?: string;
  error?: string | boolean;
  leftIconName?: string;
  iconContainerStyle?: ViewStyle;
  leftIconContainerStyle?: ViewStyle;
  inputOnPress?: () => void;
  onPress?: () => void;
  secureTextEntry?: boolean;
  iconOnpress?: () => void;
  renderRightIcon?: IconProps;
  topLabel?: string;
  placeholderTextColor?: string;
  viewStyle: ViewStyle;
  errorMessage: any;
  inputStyle: ViewStyle;
  errorShow: any;
}

const UseInput: React.FC<UseInputProps> = ({
  max,
  min,
  name,
  control,
  pattern,
  editable,
  required,
  maxLength,
  multiline,
  placeholder,
  removeRegex,
  keyboardType,
  defaultValue,
  ruleMinLength,
  ruleMaxLength,
  numberOfLines,
  renderLeftIcon,
  autoCapitalize,
  containerStyle,
  inputContainerStyle,
  iconName,
  error,
  leftIconName,
  iconContainerStyle,
  leftIconContainerStyle,
  inputOnPress,
  secureTextEntry,
  iconOnpress,
  renderRightIcon,
  topLabel,
  placeholderTextColor,
  onPress,
  viewStyle,
  errorMessage,
  inputStyle,
  errorShow,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        min: min,
        max: max,
        required: required ?? true,
        minLength: ruleMinLength,
        maxLength: ruleMaxLength,
        pattern: pattern ? pattern : null,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputComponent
          inputStyle={inputStyle}
          onblur={onBlur}
          topLabel={topLabel}
          onPress={onPress}
          iconName={iconName}
          viewStyle={viewStyle}
          editable={editable}
          placeholderTextColor={placeholderTextColor}
          multiline={multiline}
          renderLeftIcon={renderLeftIcon}
          iconContainerStyle={iconContainerStyle}
          leftIconContainerStyle={leftIconContainerStyle}
          maxLength={maxLength}
          onChangeText={value => {
            if (removeRegex) {
              onChange(value);
            } else {
              const dd = keyboardType?.includes('number-pad')
                ? /^[0-9]*$/
                : /^[A-Za-z0-9.,\s@]*$/;
              if (dd.test(value)) {
                onChange(value);
              }
            }
          }}
          secureTextEntry={secureTextEntry}
          leftIconName={leftIconName}
          errorMessage={
            errorMessage
              ? errorMessage
              : error
              ? !errorShow
                ? 'This filed is required'
                : null
              : undefined
          }
          placeholder={placeholder}
          onPressIn={inputOnPress}
          renderRightIcon={renderRightIcon}
          iconOnpress={iconOnpress}
          keyboardType={keyboardType}
          inputOnPress={inputOnPress}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          containerStyle={containerStyle}
          inputContainerStyle={{
            borderColor: error ? COLORS.red : COLORS.white,
            ...inputContainerStyle,
          }}
          value={
            value?.path
              ? value?.path?.split('/')?.pop()
              : value?.name
              ? value?.name
              : value
          }
        />
      )}
    />
  );
};

export default UseInput;
