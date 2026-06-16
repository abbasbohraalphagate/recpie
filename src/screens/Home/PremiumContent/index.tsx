import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import Fontisto from '@react-native-vector-icons/fontisto';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Switch } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import UseInput from '../../../component/Hook/UseInput';
import CustomButton from '../../../component/AppButton/GradientButton';
const PremiumContent = () => {
  const data = [{ title: 'Allow Access To Premium Content', Value: false }];
  const { control, watch, setValue } = useForm({
    defaultValues: {
      description: '',
      description1: '',
      businessPrice: '',
      accountName: '',
      sortCode: '',
      accountNumber: '',
      OneMonthPlan: '',
      SixMonthPlan: '',
      OneYearPlan: '',
    },
  });
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Label labelContent={'Gold'} family={FONTS.PoppinsBold} size={18} />
            <Ionicons name="pencil" size={15} />
          </View>
          <Switch value={false} color={COLORS.primary} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Description..."
          value={watch('description')}
          onChangeText={text => setValue('description', text)}
          multiline
        />
        <Label
          labelContent={'Choose business modal'}
          family={FONTS.PoppinsSemiBold}
          size={18}
          mt={20}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.lightGray2,
          }}
        >
          <Label
            labelContent={'One off payment '}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <Switch value={false} color={COLORS.primary} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.lightGray2,
          }}
        >
          <Label
            labelContent={'Subscription service'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <Switch value={false} color={COLORS.primary} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 15,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.lightGray2,
            gap: 15,
          }}
        >
          <Label labelContent={'Price $'} color={COLORS.black2} size={18} />
          <UseInput
            placeholder={''}
            control={control}
            name={'businessPrice'}
            viewStyle={{ width: '40%' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Label
              labelContent={'Platinum'}
              family={FONTS.PoppinsBold}
              size={18}
            />
            <Ionicons name="pencil" size={15} />
          </View>
          <Switch value={false} color={COLORS.primary} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Description..."
          value={watch('description1')}
          onChangeText={text => setValue('description1', text)}
          multiline
        />
        <Label
          labelContent={'Choose business modal'}
          family={FONTS.PoppinsSemiBold}
          size={18}
          mt={20}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.lightGray2,
          }}
        >
          <Label
            labelContent={'One off payment '}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <Switch value={false} color={COLORS.primary} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.lightGray2,
          }}
        >
          <Label
            labelContent={'Subscription service'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <Switch value={false} color={COLORS.primary} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            gap: 15,
          }}
        >
          <Label
            labelContent={'1 Month Sub Plan $'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
          />
          <UseInput
            placeholder={''}
            control={control}
            name={'OneMonthPlan'}
            viewStyle={{ width: '40%' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          />
          <Label
            labelContent={'P/M'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            gap: 15,
          }}
        >
          <Label
            labelContent={'6 Month Sub Plan $'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
          />
          <UseInput
            placeholder={''}
            control={control}
            name={'SixMonthPlan'}
            viewStyle={{ width: '40%' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          />
          <Label
            labelContent={'P/M'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            gap: 15,
          }}
        >
          <Label
            labelContent={'1 year Sub Plan $'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
            textStyle={{ flex: 1 }}
          />
          <UseInput
            placeholder={''}
            control={control}
            name={'OneYearPlan'}
            viewStyle={{ width: '40%' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          />
          <Label
            labelContent={'P/M'}
            color={COLORS.black2}
            size={14}
            family={FONTS.PoppinsBold}
          />
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: COLORS.lightGray2,
            marginTop: 50,
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Label
            labelContent={'Setup a deposit account to receive payments'}
            family={FONTS.PoppinsBold}
            size={18}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray2,
            paddingBottom: 12,
            marginTop: 15,
          }}
        >
          <Label
            labelContent={'Add deposit account'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <Switch value={false} color={COLORS.primary} />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray2,
            paddingBottom: 12,
            marginTop: 15,
          }}
        >
          <Label
            labelContent={'Add deposit account'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <UseInput
            inputContainerStyle={{
              backgroundColor: COLORS.transparent,
            }}
            control={control}
            name={'accountName'}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray2,
            paddingBottom: 12,
            marginTop: 15,
          }}
        >
          <Label
            labelContent={'Sort Code'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <UseInput
            inputContainerStyle={{
              backgroundColor: COLORS.transparent,
            }}
            control={control}
            name={'sortCode'}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray2,
            paddingBottom: 12,
            marginTop: 15,
          }}
        >
          <Label
            labelContent={'accountNumber'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
          <UseInput
            inputContainerStyle={{
              backgroundColor: COLORS.transparent,
            }}
            control={control}
            name={'accountNumber'}
          />
        </View>
      </View>
      <CustomButton
        title="Save"
        textSize={16}
        textColor={COLORS.white}
        containerStyle={styles.button}
      />
    </ScrollView>
  );
};
export default PremiumContent;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    minHeight: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    textAlignVertical: 'top',
    fontFamily: FONTS.PoppinsRegular,
    color: COLORS.textGray,
    fontSize: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: '#6CC14E',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6CC14E',
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    height: 45,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2.5,
    shadowRadius: 3,
  },
});
