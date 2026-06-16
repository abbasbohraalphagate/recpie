import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import * as shape from 'd3-shape';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';

const Graph = () => {
  const earningData = [20000, 10000, 15000, 12000, 18000, 23000];
  const activeData = [15000, 8000, 12000, 10000, 15000, 21000];
  const dates = ['2 Nov', '4 Nov', '11 Nov', '18 Nov', '25 Nov', '2 Dec'];

  const Gradient = ({ id, color }) => (
    <Defs>
      <LinearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor={color} stopOpacity={0.4} />
        <Stop offset="100%" stopColor={color} stopOpacity={0.05} />
      </LinearGradient>
    </Defs>
  );

  return (
    <View style={{ marginTop: 25, paddingHorizontal: 5 }}>
      <Label
        labelContent="Overview"
        size={16}
        family={FONTS.PoppinsMedium}
        color={COLORS.black}
        mb={10}
        align="left"
        textStyle={{ marginLeft: 20 }}
      />

      <View style={{ height: 220, flexDirection: 'row' }}>
        <YAxis
          data={earningData}
          style={{ marginBottom: 30 }}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: 'grey', fontSize: 10 }}
          numberOfTicks={5}
          formatLabel={value => `${value / 1000}k`}
        />

        <View style={{ flex: 1 }}>
          {/* First Line Chart */}
          <LineChart
            style={{ flex: 1 }}
            data={earningData}
            curve={shape.curveNatural}
            svg={{
              stroke: '#2D9CDB',
              strokeWidth: 2,
              fill: 'url(#gradient1)',
            }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Gradient id="gradient1" color="#2D9CDB" />
            <Grid />
          </LineChart>

          {/* Second Line Chart (overlaid) */}
          <LineChart
            style={StyleSheet.absoluteFill}
            data={activeData}
            curve={shape.curveNatural}
            svg={{
              stroke: '#9B51E0',
              strokeWidth: 2,
              fill: 'url(#gradient2)',
            }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Gradient id="gradient2" color="#9B51E0" />
          </LineChart>

          {/* X Axis */}
          <XAxis
            style={{ marginTop: 8 }}
            data={earningData}
            formatLabel={(_, index) => dates[index]}
            contentInset={{ left: 15, right: 15 }}
            svg={{ fill: 'grey', fontSize: 10 }}
          />
        </View>
      </View>

      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#2D9CDB' }]} />
          <Label labelContent="Earning" size={12} color={COLORS.black} />
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#9B51E0' }]} />
          <Label
            labelContent="Active Subscription"
            size={12}
            color={COLORS.black}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default Graph;
