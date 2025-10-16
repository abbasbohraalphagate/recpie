import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Switch } from '@rneui/base';

const Settings: React.FC = () => {
  const options = [
    { title: 'Messages', navigation: '' },
    { title: 'Manage Premium Content', navigation: '' },
    { title: 'Follow And Invite Friends.', navigation: '' },
    { title: 'Analytics', navigation: '' },
    { title: 'Notification', navigation: '' },
    { title: 'Privacy', navigation: '' },
    { title: 'Security', navigation: '' },
    { title: 'Payment', navigation: '' },
    { title: 'Account', navigation: '' },
    { title: 'Help', navigation: '' },
    { title: 'About', navigation: '' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <Switch />
      </TouchableOpacity>
      {options?.map((item, index) => {
        return (
          <TouchableOpacity style={styles.option}>
            <Label
              labelContent={item?.title}
              size={15}
              family={FONTS.PoppinsRegular}
              color={COLORS.black}
            />
            <Ionicons name="arrow-forward" size={30} color={'#EF8E0F'} />
          </TouchableOpacity>
        );
      })}
      <Label
        labelContent={'Logins'}
        size={15}
        family={FONTS.PoppinsRegular}
        color={COLORS.black}
        mt={15}
      />
      <Label
        labelContent={'Loving Information'}
        size={15}
        family={FONTS.PoppinsRegular}
        color={COLORS.black}
        mt={15}
      />
      <Label
        labelContent={'Add Account'}
        size={15}
        family={FONTS.PoppinsRegular}
        color={'#2e7d32'}
        mt={15}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 18,
  },
});

export default Settings;
