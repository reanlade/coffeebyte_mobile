import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Login button pressed');
    router.replace('/screens/HomePage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo/Logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Login Now</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.inputText]}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            placeholderTextColor="#808080"
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.inputText]}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholderTextColor="#808080"
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E735B',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 50,
    marginBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    width: 310,
    height: 58,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    color: '#997562',
  },
  inputText: {
    color: '#997562',
  },
  loginButton: {
    backgroundColor: '#3E735B',
    padding: 15,
    borderRadius: 50,
    width: 310,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default LoginPage;
