import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS, FONTS } from '../../constant';
import Label from '../Label';

interface DropDownMenuProps {
  placeholder?: string;
  value?: any;
  data?: any[];
  labelField?: string;
  valueField?: string;
  onChange?: (value: any) => void;
  onConfirmSelectItem?: (item: any) => void;
  disable?: boolean;
  dropDownStyle?: object;
  placeholderStyle?: object;
  renderItem?: (item: any) => JSX.Element;
  renderLeftIcon?: () => JSX.Element;
  renderRightIcon?: () => JSX.Element;
  topLabel?: string;
  container?: object;
  error?: boolean;
  iconColor?: any;
  labelFamily?: any;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  placeholder,
  value,
  data,
  labelField,
  valueField,
  onChange,
  onConfirmSelectItem,
  disable,
  dropDownStyle,
  placeholderStyle,
  renderItem,
  renderLeftIcon,
  renderRightIcon,
  topLabel,
  container,
  error,
  iconColor,
  labelFamily,
}) => (
  <View style={container}>
    {topLabel && (
      <View style={{ flexDirection: 'row' }}>
        <Label
          mb={10}
          size={13}
          color={'#505050'}
          family={labelFamily}
          labelContent={topLabel}
        />
        <Label labelContent="*" color="red" size={13} mh={2} />
      </View>
    )}
    <Dropdown
      value={value}
      disable={disable}
      data={data ?? []}
      onChange={onChange}
      mode={'default'}
      fontFamily={FONTS.PoppinsRegular400}
      renderLeftIcon={renderLeftIcon}
      valueField={valueField ?? 'id'}
      placeholder={placeholder ?? 'Select'}
      iconStyle={{ tintColor: COLORS.black, marginRight: 10 }}
      renderItem={renderItem}
      itemTextStyle={styles.placeholderStyle}
      labelField={labelField ?? 'name'}
      searchPlaceholder={'Search here'}
      inputSearchStyle={styles.placeholderStyle}
      selectedTextStyle={styles.placeholderStyle}
      search={(data ?? [])?.length > 8 ? true : false}
      style={[
        styles.drop,
        {
          ...dropDownStyle,
        },
      ]}
      onConfirmSelectItem={onConfirmSelectItem}
      placeholderStyle={[styles.placeholderStyle, { ...placeholderStyle }]}
    />
  </View>
);

export default DropDownMenu;

const styles = StyleSheet.create({
  drop: {
    borderRadius: 15,
    minHeight: 50,
    backgroundColor: COLORS.primary2,
  },
  placeholderStyle: {
    fontSize: 14,
    marginLeft: 20,
    color: COLORS.third,
    fontFamily: FONTS.PoppinsRegular400,
  },
});
