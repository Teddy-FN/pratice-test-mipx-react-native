import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
const Input = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    height: 40,
  },
});

export default Input;
