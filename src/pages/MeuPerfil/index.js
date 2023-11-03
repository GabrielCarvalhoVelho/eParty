import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import InputDados from '../../components/InputDados';
import Button from '../../components/Button';

export default function MeuPerfil({ navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Meu perfil',
    });
  }, []);
  
  const [nome, setNome] = useState('Gabriel Carvalho Velho');
  const [usuario, setUsuario] = useState('Gabriel');
  const [email, setEmail] = useState('Gabriel.c.velho@outlook.com');
  const [senha, setSenha] = useState('******');
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    setMensagem('Dados salvos com sucesso!');

    // Esconde a mensagem após 5 segundos
    setTimeout(() => {
      setMensagem('');
    }, 5000);
    
    console.log('Perfil salvo:', nome, usuario, email, senha);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <InputDados
            label="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Usuário"
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.card}>
          <InputDados
            label="Senha"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="Salvar"
            backgroundColor="green"
            onPress={handleSalvar}
          />
        </View>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
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
    fontSize: 16
  },
  button: {
    marginTop: 10, // Adicionei a margem vertical
    width: 200, // Para justificar o botão aos inputs
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
