import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListadeIcones from '../../components/ListaDeIcones';

export default function Configuracoes({ navigation }){
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Configurações',
    });
  }, []);
  const iconsData = [
    {
      id: '6',
      text: 'Gerenciar Notificações',
    },
    {
      id: '7',
      text: 'Sobre Esta Versão',
    },
    {
      id: '8',
      text: 'Ajuda',
    },
  ];

  return (
    <View style={styles.container}>
      <ListadeIcones icons={iconsData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});
