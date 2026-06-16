import React from 'react';
import { View } from 'react-native';

import Label from '../../../component/Label';
import { FONTS } from '../../../constant';

const AboutScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Label
        labelContent={'Recipe'}
        color={'#6BBE4F'}
        size={60}
        family={FONTS.DancingScriptBold}
        mh={20}
      />
      <Label
        labelContent={`Recipe is a unique lifestyle network, website
and magazine that connects viewers to the
power and joy of food. The network strives to
be viewers’ best friend in food and is
committed to leading by teaching, inspiring.
empowering and entertaining through its.
talent and expertise. Food Network is
distributed to nearly 100 million USS.
households and draws over 46 million unique
web users monthly. Since launching in 2009,
Food Network Magazine's rate base has grown
13 times and is the No. 2 best-selling monthly
magazine on the newsstand, with 13.5 million
readers. Food Network is owned by Discovery,
Inc. a global leader in real life entertainment
whose portfolio also includes Discovery
Channel, HGTV, TLC, Investigation Discovery,
and OWN: Oprah Winfrey Network.`}
        size={14}
        mh={20}
        mt={20}
        family={FONTS.PoppinsRegular}
      />
      <Label
        labelContent={`Version 1.0.0`}
        size={18}
        mh={20}
        mt={80}
        family={FONTS.PoppinsBold}
      />
    </View>
  );
};
export default AboutScreen;
