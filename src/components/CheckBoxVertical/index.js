import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckBoxVertical = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, checked && styles.checkedContainer]}
      onPress={toggleCheckbox}
    >
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}></View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCheckbox: {
    backgroundColor: 'green',
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CheckBoxVertical;
