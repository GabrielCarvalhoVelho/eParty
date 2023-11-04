import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import Button from '../../components/Button/index';
import CardFormaDePagamento from '../../components/CardFormaDePagamento';
import CheckBoxVertical from '../../components/CheckBoxVertical';

export default function FormaDePagamento({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Forma de Pagamento',
    });
  }, []);

  // Estado para controlar a visibilidade das opções de cartão de crédito
  const [mostrarBandeiras, setMostrarBandeiras] = useState(false);
  const [mostrarOpcoesDinheiro, setMostrarOpcoesDinheiro] = useState(false);
  const [mostrarCartoes, setMostrarCartoes] = useState(false);
  const [mostrarOpcoesPix, setMostrarOpcoesPix] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Pagamento na Entrega</Text>
        <CardFormaDePagamento
          id="credito_debito_entrega"
          icon="credit-card"
          label="Cartão de Débito ou Crédito"
          onPress={() => setMostrarBandeiras(!mostrarBandeiras)} // Toggle a visibilidade das opções
        />
        {/* Renderize as opções de cartão de crédito condicionalmente */}
        {mostrarBandeiras && (
          <View style={styles.checkboxContainer}>
            <CheckBoxVertical label="Mastercard" />
            <CheckBoxVertical label="Visa" />
            <CheckBoxVertical label="Elo" />
            <CheckBoxVertical label="American Express" />
            <CheckBoxVertical label="Sorocred" />
          </View>
        )}
        <CardFormaDePagamento id="dinheiro" icon="money" label="Dinheiro"
        onPress={() => setMostrarOpcoesDinheiro(!mostrarOpcoesDinheiro)} />
        {/* Renderize as opções de dinheiro condicionalmente */}
        {mostrarOpcoesDinheiro && (
          <View style={styles.checkboxContainer}>
            <Text style={styles.valorPedido}>Valor do seu pedido: 820.00</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o valor do troco"
            />
            <CheckBoxVertical label="Não preciso de troco" />
          </View>
        )}
        
        <Text style={styles.sectionTitle}>Pagamento no App</Text>
        <CardFormaDePagamento
          id="credito_debito_app"
          icon="credit-card"
          label="Cartão de Débito ou Crédito"
          onPress={() => setMostrarCartoes(!mostrarCartoes)}
        />
        {/* Renderize as opções de dinheiro condicionalmente */}
        {mostrarCartoes && (
          <View style={styles.checkboxContainer}>
            <CheckBoxVertical label="Cartão do Fulano" />
            <CheckBoxVertical label="Cartão do Ciclano" />
            <Button
                text="Adicionar cartão"
                title="Adicionar cartão"
                backgroundColor="purple"
                onPress={() => {
                    navigation.navigate('AdicionarCartao')
                }}
            />
          </View>
        )}
        <View style={{marginBottom: 20}}>
        <CardFormaDePagamento id="pix" icon="money" label="Pix" 
        onPress={() => setMostrarOpcoesPix(!mostrarOpcoesPix)} />
        {/* Renderize as opções de dinheiro condicionalmente */}
        {mostrarOpcoesPix && (
          <View style={styles.checkboxContainer}>
            <Image
              source={require('../../assets/qr-code.jpeg')}
              style={styles.qrCode}
            />
          </View>
        )}
        </View>
        
        <Button
          text="Finalizar Compra"
          title="Finalizar Compra"
          backgroundColor="green"
          onPress={() =>
            navigation.navigate('FinalizarCompra')
            }
        />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkboxContainer: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 20, // Espaçamento vertical dos checkboxes
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10// Espaçamento abaixo de cada checkbox
  },
  checkboxSquare: {
    borderRadius: 5,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5, // Espaçamento à direita do quadrado do checkbox
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16
  },
  qrCode: {
    width: 200,
    height: 200,
    marginLeft: 70
  },
  valorPedido: {
    fontSize: 16,
    marginBottom: 10
  }
});
