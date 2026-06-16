import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  ScrollViewBase,
} from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import RowLabel from '../../../component/Label/RowLabel';
import Graph from './Graph';

export default function AnalyticsScreen(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          height: 130,
          width: 130,
          alignSelf: 'center',
          marginTop: 50,
          backgroundColor: '#398b3cff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}
      >
        <Label
          labelContent={'1785'}
          size={20}
          family={FONTS.PoppinsBold}
          color={COLORS.white}
        />
        <Label
          labelContent={'USD'}
          size={18}
          family={FONTS.PoppinsRegular}
          color={COLORS.white}
        />
      </View>
      <Label
        labelContent={'256 Subscriptions'}
        size={20}
        family={FONTS.PoppinsRegular}
        color={COLORS.black}
        align={'center'}
        mt={30}
      />
      <View
        style={{
          marginHorizontal: 50,
          padding: 10,
          borderRadius: 12,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 2.5,
          shadowRadius: 2.5,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 18,
        }}
      >
        <Label
          textStyle={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: '#B8B8B8',
          }}
          align={'center'}
          labelContent={'Gold'}
          size={14}
          color={'#EF8E0F'}
          family={FONTS.PoppinsMedium}
        />
        <Label
          textStyle={{ flex: 1 }}
          align={'center'}
          labelContent={'Platinum'}
          size={14}
          family={FONTS.PoppinsMedium}
        />
      </View>
      <RowLabel
        firstLabel={'Gold Earning'}
        secondLabel={'256$'}
        firstLabelSize={16}
        secondLabelSize={16}
        family={FONTS.PoppinsRegular}
        family1={FONTS.PoppinsMedium}
        color1={COLORS.black}
        color2={COLORS.black}
        viewStye={{
          paddingHorizontal: 50,
          justifyContent: 'space-between',
        }}
      />
      <RowLabel
        firstLabel={'Active Subscriptions'}
        secondLabel={'20'}
        firstLabelSize={16}
        secondLabelSize={16}
        family={FONTS.PoppinsRegular}
        family1={FONTS.PoppinsMedium}
        color1={COLORS.black}
        color2={COLORS.black}
        viewStye={{
          paddingHorizontal: 50,
          justifyContent: 'space-between',
          marginTop: 15,
        }}
      />
      <RowLabel
        firstLabel={'Inactive Subscriptions'}
        secondLabel={'30'}
        firstLabelSize={16}
        secondLabelSize={16}
        family={FONTS.PoppinsRegular}
        family1={FONTS.PoppinsMedium}
        color1={COLORS.black}
        color2={COLORS.black}
        viewStye={{
          paddingHorizontal: 50,
          justifyContent: 'space-between',
          marginTop: 15,
        }}
      />
      <Graph />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
