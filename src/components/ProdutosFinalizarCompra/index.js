import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function ProdutosFinalizarCompra() {
  const products = [
    {
      name: "Local do fulano",
      price: "R$ 100,00",
      quantity: "Nº de convidados: 20",
      imagem: require('../../assets/local_do_fulano.jpeg')
    },
    {
      name: "Cerveja c/12",
      price: "R$ 30,00",
      quantity: "Quantidade: 5",
      imagem: require('../../assets/cerveja.jpeg')
    },
    {
        name: "Conhaque 700ml",
        price: "R$ 120,00",
        quantity: "Quantidade: 2",
        imagem: require('../../assets/conhaque.jpeg')
      },
    {
      name: "Kit 50 Coxinhas",
      price: "R$ 60",
      quantity: "Quantidade: 2",
      imagem: require('../../assets/coxinha.jpeg')
    },
    {
        name: "Bolo de morango",
        price: "R$ 200",
        quantity: "Quantidade: 1",
        imagem: require('../../assets/bolo_de_morango.jpeg')
      },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ScrollView>
  );
}

function ProductCard({ product }) {
  return (
    <View style={styles.productInfo}>
      <Image source={product.imagem} style={styles.productSquare} />
      <View style={styles.productInfoSmallColumn}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productText}>{product.quantity}</Text>
        <Text style={styles.productText}>{product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productInfo: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    width: 300, // Aumente a largura para 300 para corresponder ao seu design
    height: 150, // Aumente a altura para 100 para corresponder ao seu design
    flexDirection: 'row',
    alignItems: 'center',
  },
  productSquare: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'blue',
  },
  productInfoSmallColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 16,
    marginBottom: 5,
  },
  productText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
