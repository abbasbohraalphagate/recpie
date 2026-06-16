import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Label from '../Label';
import { COLORS, FONTS } from '../../constant';
import RowLabel from '../Label/RowLabel';
import Ionicons from '@react-native-vector-icons/ionicons';
import CustomButton from '../AppButton/GradientButton';

interface SuccessModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
  onButtonPress: () => void;
  ButtonText: () => void;
  title: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  message,
  onClose,
  ButtonText,
  onButtonPress,
  title,
}) => {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Ionicons
            name="close-outline"
            size={25}
            style={{ alignSelf: 'flex-end' }}
          />

          <RowLabel
            viewStye={{ flexDirection: 'column' }}
            firstLabel={'Where would you '}
            secondLabel={'Like to post to ?'}
            family={FONTS.PoppinsMedium}
            family1={FONTS.PoppinsRegular}
            color1={COLORS.white}
            color2={COLORS.white}
            firstLabelSize={16}
            secondLabelSize={14}
          />
          <View
            style={{
              width: '99%',
              height: 1,
              backgroundColor: '#EF8E0F',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              padding: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                gap: 10,
              }}
            >
              <Label
                labelContent={'General Feed'}
                size={16}
                family={FONTS.PoppinsBold}
                color={'#EF8E0F'}
                textStyle={{ flex: 1 }}
              />
              <Ionicons
                name="checkbox-outline"
                size={25}
                color={COLORS.white}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                gap: 10,
              }}
            >
              <Label
                labelContent={'Gold Feed'}
                size={16}
                family={FONTS.PoppinsBold}
                color={'#EF8E0F'}
                textStyle={{ flex: 1 }}
              />
              <Ionicons
                name="checkbox-outline"
                size={25}
                color={COLORS.white}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                gap: 10,
                justifyContent: 'space-between',
              }}
            >
              <Label
                labelContent={'Platinum Feed'}
                color={'#EF8E0F'}
                size={16}
                family={FONTS.PoppinsBold}
                textStyle={{ flex: 1 }}
              />
              <Ionicons
                name="checkbox-outline"
                size={25}
                color={COLORS.white}
              />
            </View>
          </View>
          <CustomButton
            title="Post "
            textSize={16}
            textColor={COLORS.white}
            containerStyle={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: '#424F54',
    borderRadius: 12,
    paddingVertical: 10,
    elevation: 5,
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2e7d32',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#EF8E0F',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EF8E0F',
    width: '60%',
    alignSelf: 'center',
    height: 45,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2.5,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuccessModal;
