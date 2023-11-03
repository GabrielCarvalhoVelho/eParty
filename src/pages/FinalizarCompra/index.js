import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import ProdutosFinalizarCompra from '../../components/ProdutosFinalizarCompra';
import { useEffect, useState } from 'react';

export default function FinalizarCompra({navigation}) {
    // Defina o título no Header
  useEffect(() => {
    navigation.setOptions({
      title: 'Finalizar compra',
    });
  }, []);
  const [codigoPedido, setCodigoPedido] = useState('');

  useEffect(() => {
      // Gera um número aleatório de 5 dígitos para representar o código do pedido
      const randomCode = Math.floor(10000 + Math.random() * 90000);
      setCodigoPedido(randomCode);
  }, []);
    const productName = "Nome do Produto: xxxxxxx";

    return (
        <View style={styles.container}>
            <View style={styles.confirmadoContainer}>
                <Icon name="check" size={30} color="green" />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Compra Finalizada</Text>
                    <Text style={styles.codigoPedido}>Código do Pedido: {codigoPedido}</Text>
                </View>
            </View>
            <ProdutosFinalizarCompra />
            <View style={styles.receberBox}>
                <Icon name="map-marker" size={30} color="black" style={{ marginRight: 10 }} />
                <View style={styles.receberTextContainer}>
                    <Text style={styles.receberTitle}>Receber em:</Text>
                    <Text style={styles.receberText}>Rua Augusta, 679</Text>
                    <Text style={styles.receberText}>Consolação, São Paulo, SP</Text>
                </View>
            </View>
            <View style={styles.produtosBox}>
                <View style={styles.productInfoSmallColumn}>
                    <Text style={styles.productText}>05 Produtos</Text>
                    <Text style={styles.productText}>Taxa de entrega: R$ 10,00</Text>
                    <Text style={styles.productText}>Total a Pagar: R$ 820,00</Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <Button
                    text="Acompanhe seu pedido"
                    backgroundColor="purple"
                    onPress={() =>
                        navigation.navigate('AcompanhePedido')
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingLeft: 20,
        marginTop: 20
    },
    confirmadoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginRight: 20
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    summary: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontSize: 16,
        marginBottom: 5,
    },
    codigoPedido: {
        fontSize: 16,
    },
    productInfoSmall: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        width: 130,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    productSquare: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: 'blue',
    },
    productName: {
        fontSize: 14,
        marginBottom: 5,
    },
    productText: {
        fontSize: 16,
        marginBottom: 5,

    },
    productTextSmall: {
        fontSize: 14,
        marginBottom: 5,
    },
    receberBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 20
    },
    receberTextContainer: {
        marginLeft: 10,
    },
    productInfoSmallColumn: {
        flexDirection: 'column',
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    receberTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    receberText: {
        fontSize: 16,
    },
    produtosBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 220,
        marginRight: 20
    },
    produtosTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,

    },
    acompanharButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    checkoutButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
