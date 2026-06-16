import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import { Switch } from '@rneui/themed';
import Ionicons from '@react-native-vector-icons/ionicons';

type Navigation = {
  navigate: (screen: string, params?: Record<string, unknown>) => void;
};

const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar:
    'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
};

const AccountScreen: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const [user] = useState(mockUser);
  const [loading, setLoading] = useState(false);

  const onEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  const onOrders = useCallback(() => {
    navigation.navigate('Orders');
  }, [navigation]);

  const onSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  const onSignOut = useCallback(() => {
    Alert.alert('Sign out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign out',
        style: 'destructive',
        onPress: async () => {
          setLoading(true);
          try {
            // Replace with real sign-out logic (auth SDK / context)
            await new Promise(res => setTimeout(res, 800));
            // After sign out, navigate to Auth stack or root
            navigation.navigate('Auth');
          } catch (e) {
            Alert.alert('Error', 'Failed to sign out. Try again.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Label
        labelContent={'Account'}
        mh={20}
        mt={20}
        size={16}
        family={FONTS.PoppinsBold}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}
        >
          <Ionicons name="pencil" size={15} />
          <Label
            labelContent={'Private Account'}
            family={FONTS.PoppinsRegular}
            size={18}
          />
        </View>
        <Switch value={false} color={COLORS.primary} />
      </View>
      <Label
        labelContent={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
        size={12}
        mh={10}
        mt={15}
        align={'center'}
      />
    </View>
  );
};

const ActionButton: React.FC<{
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.actionRow} onPress={onPress}>
    <Text style={styles.actionText}>{label}</Text>
    <Text style={styles.actionChevron}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e6e6e6',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f0f0f0',
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  email: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  actions: {
    marginTop: 24,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  actionText: {
    fontSize: 16,
    color: '#111',
  },
  actionChevron: {
    fontSize: 20,
    color: '#999',
  },
  footer: {
    marginTop: 'auto',
    paddingVertical: 24,
  },
  signOutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  disabled: {
    opacity: 0.7,
  },
});

export default AccountScreen;
