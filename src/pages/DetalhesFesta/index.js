import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('banco_festas.db');

export default function DetalhesFesta({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Detalhes da festa',
    });
  }, []);

  // Acesse os dados da festa a partir dos parâmetros
  const festaDetalhes = route.params.festa;

  const navigateToPlanejamento = () => {
    // Navega para a página de Planejamento
    navigation.navigate('Planejamento'); 
  };

  const handleEditarFesta = () => {
    console.log('Festa a ser editada:', festaDetalhes.nome);
    // Envia os dados da festa para a tela de edição
    navigation.navigate('EditarFesta', { festa: festaDetalhes });
  };

  const handleExcluirFesta = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Festas WHERE nome = ?',
        [festaDetalhes.nome],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Festa excluída:', festaDetalhes.nome);
            navigation.navigate('Dashboard', { festaIdParaExcluir: festaDetalhes.nome });
          } else {
            console.log('Erro ao excluir a festa do banco de dados.');
          }
        }
      );
    });
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.label}>Nome da Festa:</Text>
          <Text style={styles.value}>{festaDetalhes.nome}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Endereço da Festa:</Text>
          <Text style={styles.value}>{festaDetalhes.endereco}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Data da Festa:</Text>
          <Text style={styles.value}>{festaDetalhes.data}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Horário da Festa:</Text>
          <Text style={styles.value}>{festaDetalhes.horario}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Status da Festa:</Text>
          <Text style={styles.value}>{festaDetalhes.status}</Text>
        </View>
        <View style={styles.botoes}>
          <Button
            text="Planejamento"
            backgroundColor="purple"
            onPress={navigateToPlanejamento}
          />
        </View>
        <View style={styles.botoes}>
          <Button
            text="Editar festa"
            backgroundColor="green"
            onPress={handleEditarFesta}
          />
        </View>
        <View style={styles.botoes}>
          <Button
            text="Excluir festa"
            backgroundColor="red"
            onPress={handleExcluirFesta}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    margin: 10,
    alignSelf: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 20,
  },
  botoes: {
    paddingHorizontal: 20,
    paddingTop: 3
  },
});
