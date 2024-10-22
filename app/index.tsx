import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import TextInputField from '../components/TextInputField';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import RAKLogoComponent from '@/components/RAKLogoComponent';
import CheckboxComponent from '@/components/CheckBoxComponent';
import { sendRequest } from '@/utils/sendRequest';
import { BACKEND_URL, POST } from '@/constants/constants';

export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  type FormData = {
    name: string;
    email: string;
    password: string;
    isChecked: boolean;
  };

  const [formData, setFormData] = React.useState<FormData>({name: '', email: '', password: '', isChecked: false});  
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async () => {
    for (const key in formData) {
      if (!formData[key as keyof FormData]) {
        Alert.alert(
          'Incomplete Form',
          'Please fill in all fields',
          [{ text: 'OK' }]
        );
        return;
      }
    }
    try {
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }
    setLoading(true);
    const response = await sendRequest(BACKEND_URL, POST, data);
    setFormData({name: '', email: '', password: '', isChecked: false});
    setLoading(false);
    if(response?.id){
      navigation.navigate('submission-success');
    }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'An error occurred. Please try again later.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleFormData = (key: string, value: string | boolean) => {
    setFormData({...formData, [key]: value});
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <RAKLogoComponent />
      <Text style={styles.title}>Create Account</Text>

      <TextInputField placeholder="Full Name" iconName="person-outline" onChangeText={(value)=> handleFormData("name", value)}/>
      <TextInputField placeholder="Email address" iconName="mail-outline" onChangeText={(value)=> handleFormData("email", value)}/>
      <TextInputField placeholder="Password" iconName="lock-closed-outline" secureTextEntry={true} onChangeText={(value)=> handleFormData("password", value)}/>

      <View style={styles.checkboxContainer}>
        <CheckboxComponent
          value={formData.isChecked}
          onValueChange={() => {handleFormData("isChecked", !formData.isChecked)}}
        />
        <Text style={styles.checkboxText}>
          I agree with <Text style={styles.linkText}>Terms</Text> and <Text style={styles.linkText}>Privacy</Text>
        </Text>
      </View>

      <ButtonComponent title="SIGN UP" onPress={handleSignUp} />
      <ButtonComponent
        title="Sign Up with Google"
        style={styles.googleButton}
        textStyle={{ color: '#282828', fontWeight: 'regular' }}
        logoName='logo-google'
        onPress={() => {}}
      />

      <TouchableOpacity>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.linkText}>Log In</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E63946',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 4,
    alignSelf: 'flex-start'
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
  },
  linkText: {
    color: '#E63946',
    textDecorationLine: 'underline',
  },
  googleButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
  },
});
