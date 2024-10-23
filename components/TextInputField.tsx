import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TextInputFieldProps {
  placeholder: string;
  iconName: keyof typeof Ionicons.glyphMap;
  testID: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const TextInputField = ({ placeholder, iconName, secureTextEntry, onChangeText, testID }: TextInputFieldProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={24} color="#a9a9a9" style={styles.icon} />
      <TextInput
        testID={testID}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default TextInputField;
