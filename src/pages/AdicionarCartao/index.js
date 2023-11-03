import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Button from '../../components/Button';
import InputDados from '../../components/InputDados';
import CheckBox from '../../components/CheckBox';

export default function AdicionarCartao({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Adicionar Cartão',
    });
  }, []);

  const [isCreditoChecked, setCreditoChecked] = useState(false);
  const [isDebitoChecked, setDebitoChecked] = useState(false);

  const toggleCredito = () => {
    setCreditoChecked(!isCreditoChecked);
    if (isDebitoChecked) {
      setDebitoChecked(false);
    }
  };

  const toggleDebito = () => {
    setDebitoChecked(!isDebitoChecked);
    if (isCreditoChecked) {
      setCreditoChecked(false);
    }
  };

  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCVV] = useState('');
  const [nomeNoCartao, setNomeNoCartao] = useState('');
  const [apelido, setApelido] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    // Validar os campos e salvar os dados do cartão
    if (numeroCartao === '' || nomeCartao === '' || validade === '' || cvv === '' || nomeNoCartao === '' || apelido === '') {
      setMensagem('Preencha todos os campos obrigatórios.');
    } else if (!isCreditoChecked && !isDebitoChecked) {
      setMensagem('Selecione o tipo do cartão (Crédito ou Débito).');
    } else {
      setMensagem('Cartão adicionado com sucesso!');

      // Limpar os campos após o salvamento
      setNumeroCartao('');
      setNomeCartao('');
      setValidade('');
      setCVV('');
      setNomeNoCartao('');
      setApelido('');

      // Esconde a mensagem após 5 segundos
      setTimeout(() => {
        setMensagem('');
      }, 5000);

      console.log('Cartão salvo:', nomeCartao, numeroCartao, validade, cvv, nomeNoCartao, apelido);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.checkboxContainer}>
          <CheckBox
            label="Crédito"
            checked={isCreditoChecked}
            onChange={toggleCredito}
          />
          <CheckBox
            label="Débito"
            checked={isDebitoChecked}
            onChange={toggleDebito}
          />
        </View>


        <View style={styles.card}>
          <InputDados
            placeholder="Número do Cartão"
            value={numeroCartao}
            onChangeText={setNumeroCartao}
          />
        </View>
        <View style={styles.card}>
            <InputDados
                placeholder="Nome do Cartão"
                value={nomeCartao}
                onChangeText={setNomeCartao}
            />
        </View>
        <View style={styles.card}>
            <InputDados
                placeholder="Validade"
                value={validade}
                onChangeText={setValidade}
            />
        </View>
          
        <View style={styles.card}>
            <InputDados
                placeholder="CVV"
                value={cvv}
                onChangeText={setCVV}
            />
        </View>
          
          <View style={styles.card}>
            <InputDados
                placeholder="Nome no Cartão"
                value={nomeNoCartao}
                onChangeText={setNomeNoCartao}
            />
          </View>
          
          <View style={styles.card}>
            <InputDados
                placeholder="Apelido do Cartão"
                value={apelido}
                onChangeText={setApelido}
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
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    width: '90%',
    margin: 5,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    height: 60,
    width: 352,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10, // Aumenta o padding
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 5
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 16,
  },
  checkedCheckbox: {
    backgroundColor: 'green',
  },
  input: {
    fontSize: 16,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
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
});
