import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

function ListaDeIcones({ icons, navigation }) {
  const renderIconItem = ({ item }) => (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => {
        const { id, name } = item;
        // Use o ID para determinar qual ação executar
        switch (id) {
          case '1':
            // Redireciona para a página Criar Festa
            navigation.navigate('CriarFesta');
            break;
          case '2':
            // Redireciona para a página Histórico de compras
            navigation.navigate('MeusPedidos');
            break;
          case '3':
            // Redireciona para a página Acompanhe seu pedido
            navigation.navigate('MeusCartoes');
            break;
          case '4':
            // Redireciona para a página Meus Cartões
            navigation.navigate('MeuPerfil');
            break;
          case '5':
            // Redireciona para a página MeuPerfil
            navigation.navigate('Configuracoes');
            break;
          case '6':
              // Redireciona para a página Configuracoes
            navigation.navigate('GerenciarNotificacoes');
            break;
          case '7':
              // Redireciona para a página Configuracoes
            navigation.navigate('SobreEstaVersao');
          break;
          case '8':
              // Redireciona para a página Configuracoes
              navigation.navigate('Ajuda');
          break;
          default:
            // Caso contrário, não faz nada
            break;
        }
      }}
    >
      <Text style={styles.iconText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
      data={icons}
      keyExtractor={(item) => item.id}
      renderItem={renderIconItem}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default ListaDeIcones;
