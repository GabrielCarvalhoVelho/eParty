import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardFormaDePagamento = ({ icon, label, onPress, marginBottom }) => {
  return (
    <TouchableOpacity
      style={[styles.paymentOption, marginBottom && styles.marginBottom]}
      onPress={onPress}
    >
      <Icon name={icon} size={30} color="black" style={styles.icon} />
      <Text style={styles.paymentOptionText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentOption: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  paymentOptionText: {
    fontSize: 16,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default CardFormaDePagamento;
