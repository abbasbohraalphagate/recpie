import { TouchableOpacity } from 'react-native';
import React from 'react';
import UseInput from '../Hook/UseInput';
import { COLORS, genericStyles } from '../../constant';

const DateSelect = ({
    onPress,
    control,
    name,
    onError,
    disabled,
    placeholder,
    style,
    viewStyle
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            disabled={disabled}
            activeOpacity={0.8}>
            {control && (
                <UseInput
                    name={name}
                    viewStyle={viewStyle}
                    editable={false}
                    control={control}
                    inputStyle={[genericStyles.ml(-8), { backgroundColor: COLORS.white }]}
                    placeholder={placeholder}
                    iconName="calendar"
                    containerStyle={{ backgroundColor: COLORS.white }}
                    inputContainerStyle={[genericStyles.borderColor(
                        onError ? COLORS.red : COLORS.primary,
                    ), { backgroundColor: COLORS.white }]}
                />
            )}
        </TouchableOpacity>
    );
};

export default DateSelect;