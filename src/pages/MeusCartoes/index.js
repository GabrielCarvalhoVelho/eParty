import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import ModalEditar from '../../components/ModalEditar';
import ModalExcluir from '../../components/ModalExcluir';
import Button from '../../components/Button';

export default function MeusCartoes({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Meus cartões',
    });
  }, []);

  const [cartoesData, setCartoesData] = useState([
    {
      id: '1',
      apelido: 'Cartão do Fulano',
      tipoCartao: 'Crédito',
      bandeiraCartao: 'Mastercard',
      ultimosDigitos: '1234',
      principal: true,
    },
    {
      id: '2',
      apelido: 'Cartão da Ciclana',
      tipoCartao: 'Débito',
      bandeiraCartao: 'Elo',
      ultimosDigitos: '5678',
      principal: false,
    },
    {
      id: '3',
      apelido: 'Cartão do Beltrano',
      tipoCartao: 'Crédito',
      bandeiraCartao: 'Mastercard',
      ultimosDigitos: '9012',
      principal: false,
    },
  ]);

  const [expandedCardId, setExpandedCardId] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const openDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const handleStarClick = (id) => {
    const updatedCartoes = cartoesData.map((cartao) => {
      if (cartao.id === id) {
        // Quando clicamos em um cartão para torná-lo principal,
        // definimos esse cartão como principal e os outros como não principais.
        return { ...cartao, principal: true };
      } else {
        return { ...cartao, principal: false };
      }
    });

    // Atualize o estado dos cartões usando setCartoesData
    setCartoesData(updatedCartoes);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartoesData.map((cartao) => (
          <View key={cartao.id} style={styles.card}>
            <TouchableOpacity
              onPress={() => setExpandedCardId(cartao.id === expandedCardId ? null : cartao.id)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{cartao.apelido}</Text>
                <View style={styles.starContainer}>
                  {cartao.principal ? (
                    <TouchableOpacity style={styles.starButton} onPress={() => handleStarClick(cartao.id)}>
                      <Text style={styles.starText}>★</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.starButton} onPress={() => handleStarClick(cartao.id)}>
                      <Text style={styles.starText}>☆</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <Text style={styles.tipoCartao}>{cartao.tipoCartao} - <Text style={styles.tipoCartao}>{cartao.bandeiraCartao}</Text></Text>
              <Text style={styles.numeroCartao}>**** **** {cartao.ultimosDigitos}</Text>
            </TouchableOpacity>

            {cartao.id === expandedCardId && (
              <View style={styles.expandedContent}>
                <TouchableOpacity style={styles.expandedButton} onPress={openEditModal}>
                  <Text style={styles.expandedButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.expandedButton} onPress={openDeleteModal}>
                  <Text style={styles.expandedButtonText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
        <ModalEditar
          isVisible={isEditModalVisible}
          onClose={() => setEditModalVisible(false)}
          onSave={(newCardName) => {
            Alert.alert('Sucesso', 'O cartão foi salvo com sucesso', [{ text: 'OK' }]);
          }}
        />

        <ModalExcluir
          isVisible={isDeleteModalVisible}
          onClose={() => setDeleteModalVisible(false)}
          onConfirm={() => {
            Alert.alert('Sucesso', 'O cartão foi excluído com sucesso', [{ text: 'OK' }]);
          }}
          message="Tem certeza que deseja excluir o cartão?"
        />
        <Button
          text="Adicionar cartão"
          backgroundColor="green"
          onPress={() =>
            navigation.navigate('AdicionarCartao')
            }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: 'gray', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.8, // Opacidade da sombra
    shadowRadius: 3, // Raio da sombra
    elevation: 3, // Efeito de elevação no Android
  },  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  starButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  starText: {
    fontSize: 24,
    color: 'gold',
  },
  expandedContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  expandedButton: {
    backgroundColor: 'purple',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: 'gray', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.8, // Opacidade da sombra
    shadowRadius: 3, // Raio da sombra
    elevation: 3, // Efeito de elevação no Android
  },
  expandedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tipoCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10
  },
  numeroCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
});
