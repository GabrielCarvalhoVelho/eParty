import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';

export default function Carrinho({ navigation }) {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10.00, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15.00, quantity: 1 },
    { id: 3, name: 'Item 3', price: 20.00, quantity: 1 },
  ]);

  const addItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const addNewItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: 10.00,
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <View style={[styles.productSquare, { width: 80, height: 80, borderRadius: 5 }]}></View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => removeItem(item.id)}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => addItem(item.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeItem(item.id)}
              >
                <Icon name="trash" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.addNewItemContainer}>
        <Button
          text="Adicionar Item"
          backgroundColor="green"
          onPress={addNewItem}
          style={styles.addNewItemButton}
        />
      </View>
      <View style={styles.receberBox}>
        <Icon name="map-marker" size={30} color="black" style={{ marginRight: 10 }} />
        <View style={styles.receberTextContainer}>
          <Text style={styles.receberTitle}>Receber em:</Text>
          <Text style={styles.receberText}>Rua Augusto, XXXX</Text>
          <Text style={styles.receberText}>Consolação, São Paulo, SP</Text>
        </View>
      </View>
      
      <Text style={styles.total}>Total: R$ {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</Text>

      <Button
        text="Selecionar forma de pagamento"
        backgroundColor="purple"
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('FormaDePagamento')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  itemBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 10,
  },
  addNewItemContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  addNewItemButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  productSquare: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: 'blue',
  },
  receberBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  receberTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  receberText: {
    fontSize: 14,
    marginLeft: 10,
  },
  receberTextContainer: {
    flex: 1,
  },
});
