import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

interface IingredientsInput {
  placeholder: string;
  value: string;
  height: number;
  onChangeText: (text: string) => void;
  multiline?: boolean;
}
const IngredientsInput = ({
  value,
  onChangeText,
  height,
  placeholder,
  multiline = false,
}: IingredientsInput) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.input, {height}]}
      placeholderTextColor="#a30303"
      multiline={multiline}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: '85%',
    padding: 12,
    backgroundColor: '#e0d5d5',
    borderRadius: 15,
    marginBottom: 20,
    marginLeft: 15,
    color: '#000',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default IngredientsInput;
