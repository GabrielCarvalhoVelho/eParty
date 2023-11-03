import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputDados = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888" // Define uma cor de texto de espaço reservado personalizada
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 60, // Aumenta a altura do input
    paddingHorizontal: 10,
    fontSize: 18, // Define o tamanho do texto
    textAlignVertical: 'center', // Centraliza verticalmente o texto dentro do input
    borderBottomWidth: 0, // Adiciona uma linha inferior ao input
  },
});

export default InputDados;
