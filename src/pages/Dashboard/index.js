import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FestaCarousel from '../../components/FestaCarousel/index';
import ListaDeIcones from '../../components/ListaDeIcones';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('banco_festas.db');

export default function Dashboard({ route, navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Dashboard',
    });
  }, []);

  const [festas, setFestas] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Festas;', [], (_, { rows }) => {
        const data = rows._array;
        setFestas(data);
      });
    });
  }, []);

  useEffect(() => {
    if (route.params?.newFesta) {
      setFestas(prevFestas => [...prevFestas, route.params.newFesta]);
    }
  }, [route.params?.newFesta]);
  
  useEffect(() => {
    if (route.params?.festaIdParaExcluir) {
      const festaIdParaExcluir = route.params.festaIdParaExcluir;
      setFestas(prevFestas => prevFestas.filter(festa => festa.nome !== festaIdParaExcluir));
    }
  }, [route.params?.festaIdParaExcluir]);

  const iconsData1 = [
    { id: '1', text: 'Criar Nova Festa', onPress: () => navigation.navigate('CriarFesta') },
    { id: '2', text: 'Meus Pedidos', onPress: () => navigation.navigate('MeusPedidos') },
    { id: '3', text: 'Meus Cartões', onPress: () => navigation.navigate('MeusCartoes') },
  ];

  const iconsData2 = [
    { id: '4', text: 'Meu Perfil', onPress: () => navigation.navigate('MeuPerfil') },
    { id: '5', text: 'Configurações', onPress: () => navigation.navigate('Configuracoes') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Festas</Text>

      <FestaCarousel festas={festas} navigation={navigation} />

      <View style={styles.divider} />

      <ListaDeIcones icons={iconsData1} navigation={navigation} />

      <View style={styles.divider} />

      <ListaDeIcones icons={iconsData2} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: 'green',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
