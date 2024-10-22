import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonComponentProps {
    title: string;
    onPress: () => void;
    style?: object;
    textStyle?: object;
    logoName?: string;
    }

const ButtonComponent = ({ title, onPress, style, textStyle, logoName }: ButtonComponentProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {logoName && <Text><Ionicons name={logoName as any} size={20}/></Text>}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E63946',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    minWidth: 380,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
