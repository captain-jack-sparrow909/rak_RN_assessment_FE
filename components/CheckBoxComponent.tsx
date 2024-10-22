import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface CustomCheckboxProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  style?: object;
}

const CheckboxComponent: React.FC<CustomCheckboxProps> = ({ value, onValueChange, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={() => onValueChange(!value)}>
      <View style={[styles.checkbox, value && styles.checkedCheckbox]}>
        {value && <View style={styles.innerCheckbox} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#000',
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
  },
});

export default CheckboxComponent;