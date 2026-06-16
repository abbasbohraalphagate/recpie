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

const Settings: React.FC = props => {
  const options = [
    { title: 'Messages', navigation: 'MessageNotifications' },
    { title: 'Manage Premium Content', navigation: 'PremiumContent' },
    { title: 'Follow And Invite Friends.', navigation: 'InviteUser' },
    { title: 'Analytics', navigation: 'Analytics' },
    { title: 'Notification', navigation: 'Like' },
    { title: 'Privacy', navigation: 'Privacy' },
    { title: 'Security', navigation: 'Security' },
    { title: 'Payment', navigation: 'Payment' },
    { title: 'Account', navigation: 'Account' },
    { title: 'Help', navigation: 'Help' },
    { title: 'About', navigation: 'About' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <Switch />
      </TouchableOpacity>
      {options?.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.option}
            onPress={() => props?.navigation?.navigate(item?.navigation)}
          >
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
