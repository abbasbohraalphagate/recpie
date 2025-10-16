import React from 'react';
import { Controller } from 'react-hook-form';
import DropDownMenu from '../DropDown';
import { COLORS } from '../../constant';
import { TextStyle, ViewStyle } from 'react-native';

interface DropDownProps {
  name?: string;
  data?: any;
  focus?: boolean;
  control?: any;
  disabled?: boolean;
  required?: boolean;
  changeId?: any;
  labelField?: string;
  valueField?: string;
  placeholder?: string;
  containerLabel?: ViewStyle;
  onChanges?: (value: any) => void;
  dropDownStyle?: ViewStyle;
  error?: boolean;
  renderLeftIcon?: () => void;
  defaultValue?: string;
  topLabel?: string;
  container?: ViewStyle;
  renderRightIcon?: () => void;
  placeholderStyle?: TextStyle;
}

const UseDropDown: React.FC<DropDownProps> = ({
  name,
  data,
  focus,
  control,
  disabled,
  required,
  changeId,
  labelField,
  valueField,
  placeholder,
  containerLabel,
  onChanges,
  dropDownStyle,
  error,
  renderLeftIcon,
  defaultValue,
  topLabel,
  container,
  renderRightIcon,
  placeholderStyle,
  labelFamily,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: required ?? true,
      }}
      render={({ field: { onChange, value } }) => (
        <DropDownMenu
          labelFamily={labelFamily}
          topLabel={topLabel}
          error={error}
          data={data}
          container={container}
          renderLeftIcon={renderLeftIcon}
          renderRightIcon={renderRightIcon}
          focus={focus}
          disable={disabled}
          value={value}
          onChange={(values: any) => {
            if (onChanges) {
              onChanges(values);
            } else {
              if (changeId) {
                onChange(values);
              } else {
                onChange(values?.id ?? values);
              }
            }
          }}
          placeholder={placeholder}
          placeholderStyle={placeholderStyle}
          dropDownStyle={{
            borderColor: error ? 'red' : COLORS.white,
            ...dropDownStyle,
          }}
          containerLabel={containerLabel}
          valueField={valueField ?? 'id'}
          labelField={labelField ?? 'name'}
        />
      )}
    />
  );
};

export default UseDropDown;
