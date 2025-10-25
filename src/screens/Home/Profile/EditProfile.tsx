import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Label from '../../../component/Label';
import { COLORS, FONTS } from '../../../constant';
import { useForm } from 'react-hook-form';
import UseInput from '../../../component/Hook/UseInput';
import InputComponent from '../../../component/CustomInput';
import Ionicons from '@react-native-vector-icons/ionicons';

type Props = {
  navigation?: any;
  route?: any;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9()+\-\s]{6,20}$/;

export default function EditProfile({ navigation, route }: Props) {
  // initial values can be passed via route.params.profile
  const initial = route?.params?.profile ?? {
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    avatarUri: '',
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingRight: 0,
          }}
        >
          <Ionicons
            name="close-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, []);
  const [avatarUri, setAvatarUri] = useState<string>(initial.avatarUri);
  const [saving, setSaving] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const inputValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bio: '',
  };
  const { control, watch, setValue } = useForm({
    defaultValues: { ...inputValues },
  });
  const values = watch();
  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.fullName.trim()) e.fullName = 'Full name is required.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!emailRegex.test(email)) e.email = 'Email is invalid.';
    if (values.lastName && !phoneRegex.test(values.phone))
      e.phone = 'Phone number is invalid.';
    // bio optional
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSave = async () => {
    if (!validate()) {
      Alert.alert('Validation error', 'Please correct the highlighted fields.');
      return;
    }
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(r => setTimeout(r, 1200));

      // You would typically call your API here, for example:
      // await api.updateProfile({ fullName, email, phone, bio, avatarUri });

      // After success navigate back or show success
      Alert.alert('Saved', 'Profile updated successfully.');
      navigation?.goBack?.();
    } catch (err) {
      Alert.alert('Error', 'Failed to save profile. Try again.');
    } finally {
      setSaving(false);
    }
  };

  const onCancel = () => {
    navigation?.goBack?.();
  };

  const pickAvatar = async () => {
    // Placeholder for image picker integration.
    // Replace with your project's image picker (expo-image-picker, react-native-image-picker, document picker, etc.)
    // Example (expo-image-picker):
    // const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.8 });
    // if (!result.cancelled) setAvatarUri(result.uri);

    Alert.alert(
      'Avatar',
      'Integrate your image picker here. This demo will set a sample avatar.',
      [
        {
          text: 'Use sample',
          onPress: () =>
            setAvatarUri(
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60',
            ),
        },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  };

  const renderAvatar = () => {
    if (avatarUri) {
      return <Image source={{ uri: avatarUri }} style={styles.avatarImage} />;
    }
    return (
      <Image
        source={require('../../../assets/images/profile.jpg')}
        style={styles.avatarImage}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <View style={styles.content}>
        <TouchableOpacity style={styles.avatarTouch} onPress={pickAvatar}>
          {renderAvatar()}
          <Label
            labelContent={'Change profile image'}
            mt={20}
            family={FONTS.PoppinsSemiBold}
            size={15}
          />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 20 }}>
          {Object.keys(inputValues).map((item, index) => {
            if (item === 'bio') {
              return (
                <TextInput
                  maxLength={200}
                  multiline={true}
                  cursorColor={COLORS.black}
                  value={watch('bio')}
                  placeholder={item}
                  onChangeText={text => setValue('bio', text)}
                  style={styles.term_conditions}
                  placeholderTextColor={COLORS.black2}
                />
              );
            }
            return (
              <UseInput
                key={item}
                control={control}
                name={item}
                keyboardType={item == 'phoneNumber' ? 'number-pad' : 'default'}
                placeholder={item}
                viewStyle={{ marginTop: 10 }}
                inputContainerStyle={{ paddingHorizontal: 10 }}
              />
            );
          })}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e6e6e6',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  content: { padding: 16, flex: 1 },
  avatarTouch: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ddd',
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: { fontSize: 28, color: '#1f2937', fontWeight: '700' },
  changeText: { marginTop: 8, color: '#3b82f6' },
  field: { marginBottom: 12 },
  label: { marginBottom: 6, color: '#374151', fontSize: 13 },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    backgroundColor: '#fff',
    fontSize: 15,
    color: '#111827',
  },
  textArea: { minHeight: 80, textAlignVertical: 'top' },
  inputError: { borderColor: '#ef4444' },
  errorText: { color: '#ef4444', marginTop: 6, fontSize: 12 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9ca3af',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cancelText: { color: '#374151', fontWeight: '600' },
  saveButton: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#2563eb',
  },
  saveText: { color: '#fff', fontWeight: '600' },
  term_conditions: {
    width: '100%',
    marginVertical: 15,
    alignSelf: 'center',
    minHeight: 120,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    textAlignVertical: 'top',
    fontFamily: FONTS.PoppinsRegular,
    color: COLORS.textGray,
    fontSize: 15,
    paddingHorizontal: 10,
  },
});
