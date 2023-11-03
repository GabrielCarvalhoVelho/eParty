import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../components/Card/index';

export default function MeusPedidos({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Meus Pedidos',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Título "Histórico" */}
        <Text style={styles.title}>Histórico</Text>

        {/* Data do Pedido 1 */}
        <Text style={styles.date}>07 de Novembro de 2023</Text>

        {/* Card do Pedido 1 (clicável) */}
        <TouchableOpacity onPress={() => navigation.navigate('AcompanheSeuPedido')}>
          <Card title="Pedido: 18654">
            <Text>Festa do Fulano</Text>
            <Text>05 itens</Text>
            <Text>Em andamento</Text>
          </Card>
        </TouchableOpacity>

        {/* Data do Pedido 2 */}
        <Text style={styles.date}>03 de Novembro de 2023</Text>

        {/* Card do Pedido 2 (clicável) */}
        <TouchableOpacity onPress={() => navigation.navigate('AcompanheSeuPedido')}>
        <Card title="Pedido: 18653">
            <Text>Festa do Gabriel</Text>
            <Text>03 itens</Text>
            <Text>Em andamento</Text>
          </Card>
        </TouchableOpacity>

        {/* Outras datas e pedidos podem ser adicionados aqui conforme necessário */}
      </ScrollView>
    </View>
  );

  const handleCardClick = (pedidoId) => {
    // Adicione a lógica que deseja executar quando um card for clicado, por exemplo, navegação para os detalhes do pedido.
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    marginVertical: 10,
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
  },
});
