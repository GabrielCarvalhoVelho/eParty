import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Ajuda({ navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Ajuda',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.helpContainer}>
          <Text style={styles.helpTitle}>Bem-vindo à página de Ajuda!</Text>
          <Text style={styles.instructions}>
            Aqui estão algumas dicas sobre como utilizar o nosso aplicativo:
          </Text>
          <Text style={styles.instructions}>
            1. Para criar uma nova festa, vá para a página "Criar Festa" e siga as instruções.
          </Text>
          <Text style={styles.instructions}>
            2. Para visualizar o histórico de compras, acesse a página "Histórico de Compras".
          </Text>
          <Text style={styles.instructions}>
            3. Para acompanhar o status do seu pedido, clique em "Acompanhe Seu Pedido".
          </Text>
          <Text style={styles.instructions}>
            4. Gerencie seus cartões na página "Meus Cartões".
          </Text>
          <Text style={styles.instructions}>
            5. Atualize seu perfil na página "Meu Perfil".
          </Text>
          <Text style={styles.instructions}>
            6. Personalize as configurações na página "Configurações".
          </Text>
          <Text style={styles.instructions}>
            7. Gerencie suas notificações na página "Gerenciar Notificações".
          </Text>
          <Text style={styles.instructions}>
            8. Para copiar a versão do aplicativo, vá para "Sobre Esta Versão".
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  helpContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
  },
});
