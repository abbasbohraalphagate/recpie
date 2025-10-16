import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import GradientButton from '../AppButton/GradientButton';
import SuccessSvg from '../../assets/svg/Succes.svg';
import Label from '../Label';
import { COLORS, FONTS } from '../../constant';

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
          <SuccessSvg />
          {title && (
            <Label
              labelContent={title}
              family={FONTS.CaudexBold}
              color={COLORS.green}
              size={18}
            />
          )}
          {message && (
            <Label
              labelContent={message}
              family={FONTS.CaudexBold}
              color={COLORS.textColor}
              size={18}
              align={'center'}
            />
          )}

          <GradientButton
            title={ButtonText ?? 'Yeeehhhhh'}
            onPress={onButtonPress}
            containerStyle={{ width: '100%' }}
            colors={['#FEBF07', '#FF9114', '#FF5F20']}
            linerStyle={{ paddingHorizontal: 15 }}
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
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 24,
    alignItems: 'center',
    elevation: 5,
    gap: 10,
    paddingHorizontal: 10,
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
    backgroundColor: '#2e7d32',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuccessModal;
