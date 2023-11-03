import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function GerenciarNotificacoes({ navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Gerenciar notificações',
    });
  }, []);
  const [notificacoesAtivadas, setNotificacoesAtivadas] = useState(false);
  const [emailAtivado, setEmailAtivado] = useState(false);

  const toggleNotificacoes = () => {
    setNotificacoesAtivadas(!notificacoesAtivadas);
  };

  const toggleEmail = () => {
    setEmailAtivado(!emailAtivado);
  };

  return (
    <View style={styles.container}>
      <View style={styles.opcaoContainer}>
        <Text style={styles.opcaoTexto}>Notificações</Text>
        <Switch
          value={notificacoesAtivadas}
          onValueChange={toggleNotificacoes}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.opcaoContainer}>
        <Text style={styles.opcaoTexto}>E-mail</Text>
        <Switch
          value={emailAtivado}
          onValueChange={toggleEmail}
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  opcaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  opcaoTexto: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});
