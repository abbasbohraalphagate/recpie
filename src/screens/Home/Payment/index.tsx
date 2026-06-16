import React, { useCallback, useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import CustomImg from '../../../component/CustomImage';
import Label from '../../../component/Label';

const images = [
  { uri: require('../../../assets/images/Paypal.png') },
  { uri: require('../../../assets/images/visa.jpg') },
  { uri: require('../../../assets/images/MasterCard.png') },
  { uri: require('../../../assets/images/americanExpress.png') },
];
const PaymentScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 20,
        }}
      >
        {images?.map((image, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              width: 180,
              height: 180,
              backgroundColor: '#fff',
              justifyContent: 'center',
              padding: 10,
              marginTop: 10,
              borderRadius: 15,
              elevation: 3,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
            }}
          >
            <CustomImg
              source={image?.uri}
              style={{ width: 100, height: 150, resizeMode: 'contain' }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
  label: { fontSize: 13, color: '#333', marginTop: 12, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 14, android: 8 }),
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  col: { flex: 1, marginRight: 8 },
  button: {
    marginTop: 24,
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#99c8ff' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
