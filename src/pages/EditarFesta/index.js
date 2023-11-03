import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import InputDados from '../../components/InputDados';
import Button from '../../components/Button';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('banco_festas.db');

export default function EditarFesta({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Editar festa',
    });
  }, []);

  const festaParaEditar = route.params.festa;

  const [nome, setNome] = useState(festaParaEditar.nome);
  const [endereco, setEndereco] = useState(festaParaEditar.endereco);
  const [data, setData] = useState(festaParaEditar.data);
  const [horario, setHorario] = useState(festaParaEditar.horario);
  const [status, setStatus] = useState(festaParaEditar.status);

  const handleSalvarEdicao = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Festas SET nome = ?, endereco = ?, data = ?, horario = ?, status = ? WHERE id = ?',
        [nome, endereco, data, horario, status, festaParaEditar.id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Festa editada no banco de dados:', nome, endereco, data, horario, status);
            navigation.navigate('DetalhesFesta', {
              festa: {
                ...festaParaEditar,
                nome,
                endereco,
                data,
                horario,
                status,
              },
            });
          } else {
            console.log('Erro ao editar a festa no banco de dados.');
          }
        }
      );
    });
  };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <InputDados
                    label="Nome da Festa"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
            </View>

            <View style={styles.card}><InputDados
                label="Endereço da Festa"
                value={endereco}
                onChangeText={text => setEndereco(text)}
            /></View>

            <View style={styles.card}><InputDados
                label="Data da Festa"
                value={data}
                onChangeText={text => setData(text)}
            /></View>

            <View style={styles.card}><InputDados
                label="Horário da Festa"
                value={horario}
                onChangeText={text => setHorario(text)}
            /></View>

        <View style={styles.card}><InputDados
                label="Status"
                value={status}
                onChangeText={text => setStatus(text)}
            /></View>

            <View style={styles.botaoSalvar}>
            <Button
                text="Salvar"
                backgroundColor="green"
                onPress={handleSalvarEdicao}
            />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        margin: 10,
        alignSelf: 'center',
    },
    botaoSalvar:{
        marginTop: 10
    }
});
