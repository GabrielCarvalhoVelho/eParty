import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import InputDados from '../../components/InputDados'
import Button from '../../components/Button';

const db = SQLite.openDatabase('banco_festas.db');

export default function CriarFesta({ navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Criar festa',
    });
  }, []);

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [status, setStatus] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Festas (nome, endereco, data, horario, status) VALUES (?, ?, ?, ?, ?)',
        [nome, endereco, data, horario, status],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Festa salva:', nome, endereco, data, horario, status);
            navigation.navigate('Dashboard', { newFesta: { nome, endereco, data, horario, status } });
          } else {
            setMensagem('Erro ao salvar a festa.');
          }
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <InputDados
            label="Nome da festa"
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Digite o nome da festa"
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Endereço da festa"
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
            placeholder="Digite o endereço da festa"
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Data da festa"
            value={data}
            onChangeText={(text) => setData(text)}
            placeholder="Digite a data da festa"
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Horário da festa"
            value={horario}
            onChangeText={(text) => setHorario(text)}
            placeholder="Digite o horário da festa"
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Status da festa"
            value={status}
            onChangeText={(text) => setStatus(text)}
            placeholder="Digite o status da festa"
          />
        </View>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button
            text="Salvar"
            backgroundColor="green"
            onPress={handleSalvar}
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
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    width: '90%',
    margin: 5,
    alignSelf: 'center',
  },
  mensagem: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
});
