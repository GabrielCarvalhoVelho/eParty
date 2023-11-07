import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card/index'; // Importe o componente Card
import Button from '../../components/Button/index'; // Importe o componente Button

export default function AcompanheSeuPedido({ navigation }) {
  // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Acompanhe seu pedido',
    });
  }, []);

  const [entregaConfirmada, setEntregaConfirmada] = useState(false);
  const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);
  const codigoPedido = 18654;

  useEffect(() => {
    if (entregaConfirmada) {
      setConfirmationTextVisible(true);
      const timer = setTimeout(() => {
        setConfirmationTextVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [entregaConfirmada]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Card com previsão de entrega, status e forma de pagamento */}
        <Card title="Previsão de Entrega">
          <Text>25/12, 10:30 - 11:30</Text>
          <Text>Status do Pedido: Pendente</Text>
          <Text>Forma de Pagamento: Mastercard na Entrega</Text>
        </Card>

        {/* Card com endereço de entrega */}
        <Card title="Endereço de Entrega">
          <Text>Rua do fulano, 123</Text>
          <Text>Bairro: Fulano</Text>
          <Text>Cidade: São Paulo</Text>
        </Card>

        {/* Espaço entre os detalhes do pedido e o botão "Confirmar Entrega" */}
        <View style={styles.space}></View>

        {/* Card com detalhes do pedido e total a pagar */}
        <Card title="Detalhes do Pedido">
          <Text>Local do Fulano</Text>
          <Text>Cerveja c/12</Text>
          <Text>Conhaque 700ml</Text>
          <Text>Kit 50 Coxinhas</Text>
          <Text style={{marginBottom: 5}}>Bolo de Morango</Text>
          <Text style={{fontWeight: 'bold'}}>Total a Pagar: R$ 820,00</Text>
          <Text style={styles.orderNumber}>Número do Pedido: <Text style={{fontWeight: 'bold'}}>{codigoPedido}</Text></Text>
        </Card>

        {/* Botão Confirmar Entrega */}
        <Button
          text="Confirmar Entrega"
          title="Confirmar Entrega"
          backgroundColor="green"
          onPress={() => {
            setEntregaConfirmada(true);
          }}
        />

        {confirmationTextVisible && (
          <Text style={styles.confirmationText}>A entrega foi confirmada!</Text>
        )}

      </ScrollView>

      {/* Botão "Conversar com a Loja" fixado na parte inferior da página */}
      <Button
        text="Finalizar Pedido"
        title="Finalizar Pedido"
        backgroundColor="purple"
        onPress={() => {
            navigation.navigate('Dashboard');
        }}
        style={styles.chatButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  orderNumber: {
    textAlign: 'right',
    marginTop: 10,
  },
  space: {
    height: 10, // Espaço mínimo entre os detalhes do pedido e o botão "Confirmar Entrega"
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
  },
  confirmationText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 0,
    fontSize: 16,
  },
});
