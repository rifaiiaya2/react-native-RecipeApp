import {Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface ICustomInputField {
  placeholder: string;
  label?: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}
const CustomInputField = ({
  placeholder,
  label,
  secureTextEntry,
  value,
  onChangeText,
}: ICustomInputField) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#d4c9c9',
    marginLeft: 7,
    fontSize: 16,
    paddingVertical: 15,
    paddingLeft: 25,
  },
  input: {
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 25,
    height: 40,
    marginBottom: 10,
    marginLeft: 15,
    color: '#303030',
  },
});
export default CustomInputField;
