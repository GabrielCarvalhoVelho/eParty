import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone apropriado
import Button from '../../components/Button';

export default function Carrinho({ route, navigation }) {


    const [items, setItems] = useState([
        { id: 1, name: 'Salão do Fulano', price: 100.00, quantity: 1, imagem: require('../../assets/local_do_fulano.jpeg') },
        { id: 2, name: 'Cerveja c/ 12', price: 30.00, quantity: 5, imagem: require('../../assets/cerveja.jpeg') },
        { id: 3, name: 'Conhaque 700ml', price: 120.00, quantity: 5, imagem: require('../../assets/conhaque.jpeg') },
        { id: 4, name: 'Kit 50 coxinhas', price: 60.00, quantity: 2, imagem: require('../../assets/coxinha.jpeg') },
        { id: 5, name: 'Bolo de Morango', price: 200.00, quantity: 1, imagem: require('../../assets/bolo_de_morango.jpeg') },
    ]);

    const addItem = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseItemQuantity = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeItem = (itemId) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    const taxaEntrega = 10.00; // Defina a taxa de entrega

    return (
        <View style={styles.container}>
            <FlatList style={styles.flatList}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemBox}>
                        <Image
                            source={item.imagem}
                            style={[styles.productSquare, { width: 80, height: 80, borderRadius: 5 }]}
                        />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => decreaseItemQuantity(item.id)}
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
            <View style={styles.taxaEntregaBox}>
                <Icon name="truck" size={30} color="black" style={{ marginRight: 10 }} />
                <View style={styles.taxaEntregaTextContainer}>
                    <Text style={styles.taxaEntregaTitle}>Taxa de Entrega:</Text>
                    <Text style={styles.taxaEntregaText}>R$ {taxaEntrega.toFixed(2)}</Text>
                </View>
            </View>





            <View style={styles.receberBox}>
                <Icon name="map-marker" size={30} color="black" style={{ marginRight: 10 }} />
                <View style={styles.receberTextContainer}>
                    <Text style={styles.receberTitle}>Receber em:</Text>
                    <Text style={styles.receberText}>Rua Augusta, 679</Text>
                    <Text style={styles.receberText}>Consolação, São Paulo, SP</Text>
                </View>
            </View>
            <Text style={styles.total}>
                Total: R$ {(
                    items.reduce((total, item) => total + item.price * item.quantity, 0) + taxaEntrega
                ).toFixed(2)}
            </Text>



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
        borderRadius: 5,
        padding: 5,
    },
    quantityButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
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
        marginLeft: 15
    },
    receberText: {
        fontSize: 14,
        marginLeft: 10,
        marginLeft: 25
    },
    receberTextContainer: {
        flex: 1,
    },
    taxaEntregaBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    taxaEntregaTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    taxaEntregaText: {
        fontSize: 14,
        marginLeft: 10,
    },
    taxaEntregaTextContainer: {
        flex: 1,
    },
    flatList:{
        marginBottom: 10
    }
});
