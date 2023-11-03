import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';
import Button from '../../components/Button';

const db = SQLite.openDatabase('produtos.db');

const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, categoria TEXT, valor TEXT)'
        );
    });
};

const insertInitialData = () => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Local 1', 'Locais', 'R$100', 'Local 1']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Local 2', 'Locais', 'R$150', 'Local 2']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Local 3', 'Locais', 'R$120', 'Local 3']
        );

        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bebida 1', 'Bebidas', 'R$50', 'Bebida 1']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bebida 2', 'Bebidas', 'R$60', 'Bebida 2']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bebida 3', 'Bebidas', 'R$80', 'Bebida 3']
        );

        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Salgado 1', 'Salgados', 'R$5', 'Salgado 1']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Salgado 2', 'Salgados', 'R$4', 'Salgado 2']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Salgado 3', 'Salgados', 'R$6', 'Salgado 3']
        );

        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bolo 1', 'Bolos', 'R$20', 'Bolo 1']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bolo 2', 'Bolos', 'R$25', 'Bolo 2']
        );
        tx.executeSql(
            'INSERT INTO produtos (nome, categoria, valor) SELECT * FROM (SELECT ?, ?, ?) AS temp WHERE NOT EXISTS (SELECT nome FROM produtos WHERE nome = ?)',
            ['Bolo 3', 'Bolos', 'R$22', 'Bolo 3']
        );
    });
};

export default function Planejamento() {
    const [produtos, setProdutos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [quantidade, setQuantidade] = useState('');
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        createTable();
        insertInitialData();

        db.transaction(tx => {
            tx.executeSql('SELECT * FROM produtos', [], (_, { rows }) => {
                setProdutos(rows._array);
            });
        });
    }, []);

    const handleItemClick = (produto) => {
        setCategoria(produto.categoria);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setQuantidade('');
    };

    const categoriasUnicas = [...new Set(produtos.map(produto => produto.categoria))];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <TextInput style={styles.searchBar} placeholder="Pesquisar" />

                {categoriasUnicas.map(categoria => {
                    const produtosPorCategoria = produtos.filter(produto => produto.categoria === categoria);

                    if (produtosPorCategoria.length > 0) {
                        return (
                            <View key={categoria} style={styles.categoryContainer}>
                                <Text style={styles.title}>{categoria}</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {produtosPorCategoria.map((produto, index) => (
                                        <TouchableOpacity key={index} onPress={() => handleItemClick(produto)}>
                                            <View key={index} style={styles.card}>
                                                <Text style={styles.cardTitle}>{produto.nome}</Text>
                                                <Image
                                                    source={require('../../assets/seu-logo.png')}
                                                    style={{ width: 100, height: 100 }} // Estilo da imagem
                                                />
                                                <Text style={styles.cardValor}>{produto.valor}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        );
                    }
                    return null; // Caso a categoria não tenha produtos
                })}
                <View style={styles.paddingAtBottom}></View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button text={`Ir para o carrinho`} backgroundColor="green" onPress={() => navigation.navigate('Carrinho')} />
            </View>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                <View style={styles.modalBg}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                {categoria === 'Locais' ? 'Número de Convidados:' : 'Quantidade:'}
                            </Text>
                            <TextInput 
                                style={styles.input}
                                onChangeText={text => setQuantidade(text)}
                                value={quantidade}
                            />
                            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Text style={styles.buttonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollView: {
        flex: 1,
        paddingLeft: 20,
    },
    searchBar: {
        height: 40,
        backgroundColor: 'white',
        borderWidth: 0,
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        marginRight: 20,
        borderRadius: 10
    },
    categoryContainer: {
        marginBottom: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    modalBg: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cor escura com transparência
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    card: {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    cardValor: {
        fontSize: 14,
        textAlign: 'center',
        color: 'green', // Ou outra cor de acordo com o design
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        alignItems: 'center',
        paddingBottom: 10,
        marginLeft: 40
    },
    paddingAtBottom: {
        height: 80, // Altura correspondente ao botão
    },
});
