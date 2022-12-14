import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomButton;
