import React, { useState } from 'react';
import { Modal, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalEditar({ isVisible, onClose, onSave }) {
  const [newCardName, setNewCardName] = useState('');

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <Text style={styles.modalMessage}>Editar apelido do cartão</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Novo apelido"
            value={newCardName}
            onChangeText={setNewCardName}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity style={[styles.modalButton, styles.modalButtonCancel]} onPress={onClose}>
              <Text style={styles.modalButtonText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.modalButtonSave]} onPress={() => onSave(newCardName)}>
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 15,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  modalMessage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
  modalInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonSave: {
    backgroundColor: 'green',
  },
  modalButtonCancel: {
    backgroundColor: 'purple',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
