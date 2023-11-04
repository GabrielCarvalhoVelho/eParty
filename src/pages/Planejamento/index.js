import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import Button from '../../components/Button';

// Constantes representando os produtos
const produtos = [
    { id: 1, nome: 'Local do Fulano', categoria: 'Locais', valor: 'R$100', imagem: require('../../assets/local_do_fulano.jpeg')},
    { id: 2, nome: 'Local do Ciclano', categoria: 'Locais', valor: 'R$150', imagem: require('../../assets/local_do_ciclano.jpeg')},
    { id: 3, nome: 'Local do João', categoria: 'Locais', valor: 'R$120', imagem: require('../../assets/local_do_beltrano.jpeg')},
    { id: 4, nome: 'Vinho 900ml', categoria: 'Bebidas', valor: 'R$50', imagem: require('../../assets/vinho.jpeg')},
    { id: 5, nome: 'Cerveja c/12', categoria: 'Bebidas', valor: 'R$30', imagem: require('../../assets/cerveja.jpeg')},
    { id: 6, nome: 'Conhaque 700ml', categoria: 'Bebidas', valor: 'R$120', imagem: require('../../assets/conhaque.jpeg')},
    { id: 7, nome: 'Kit 50 Coxinhas', categoria: 'Salgados', valor: 'R$60', imagem: require('../../assets/coxinha.jpeg')},
    { id: 8, nome: 'Kit 50 Kibes', categoria: 'Salgados', valor: 'R$75', imagem: require('../../assets/kibe.jpeg')},
    { id: 9, nome: 'Kit 50 Esfihas ', categoria: 'Salgados', valor: 'R$65', imagem: require('../../assets/esfiha.jpeg')},
    { id: 10, nome: 'Bolo de Morango', categoria: 'Bolos', valor: 'R$200', imagem: require('../../assets/bolo_de_morango.jpeg')},
    { id: 11, nome: 'Bolo de Chocolate', categoria: 'Bolos', valor: 'R$180', imagem: require('../../assets/bolo_de_chocolate.jpeg')},
    { id: 12, nome: 'Bolo de Abacaxi', categoria: 'Bolos', valor: 'R$150', imagem: require('../../assets/bolo_de_abacaxi.jpeg')},
];

export default function Planejamento({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [quantidade, setQuantidade] = useState('');
    const [categoria, setCategoria] = useState('');
    const [produtoSelecionado, setProdutoSelecionado] = useState({});

    const handleItemClick = (produto) => {
        setProdutoSelecionado(produto);
        setCategoria(produto.categoria);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setQuantidade('');
        setProdutoSelecionado(null);
    };

    const adicionarProdutoAoCarrinho = () => {
        if (produtoSelecionado && quantidade > 0) {
          const produtoComQuantidade = { ...produtoSelecionado, quantidade: Number(quantidade) };
          setProdutoSelecionado(produtoComQuantidade);
          closeModal();
        }
      };

    const categoriasUnicas = [...new Set(produtos.map((produto) => produto.categoria))];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <TextInput style={styles.searchBar} placeholder="Pesquisar" />
                {/* Lógica de renderização dos produtos */}
                {categoriasUnicas.map((categoria) => {
                    const produtosPorCategoria = produtos.filter((produto) => produto.categoria === categoria);
                    if (produtosPorCategoria.length > 0) {
                        return (
                            <View key={categoria} style={styles.categoryContainer}>
                                <Text style={styles.title}>{categoria}</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {produtosPorCategoria.map((produto) => (
                                        <TouchableOpacity key={produto.id} onPress={() => handleItemClick(produto)}>
                                            <View style={styles.card}>
                                                <Text style={styles.cardTitle}>{produto.nome}</Text>
                                                {/* Imagem: ajuste de acordo com o layout */}
                                                <Image
                                                    source={produto.imagem}
                                                    style={{ width: 100, height: 100 , borderRadius: 10}}
                                                />
                                                <Text style={styles.cardValor}>{produto.valor}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        );
                    }
                    return null;
                })}
                <View style={styles.paddingAtBottom}></View>
                {/* Botão para ir para o carrinho */}
                <View style={styles.buttonContainer}>
                <Button
                    text="Ir para o Carrinho"
                    backgroundColor="green"
                    onPress={() => {
                        navigation.navigate('Carrinho', { produtos: produtoSelecionado });
                    }}
                />
                </View>
            </ScrollView>

            

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalBg}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                {categoria === 'Locais' ? 'Número de Convidados:' : 'Quantidade:'}
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setQuantidade(text)}
                                value={quantidade}
                            />
                            <TouchableOpacity onPress={adicionarProdutoAoCarrinho} style={styles.modalButton}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
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
        fontSize: 16,
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
        width: '95%',
        alignItems: 'center',
        paddingBottom: 10,
        marginLeft: 0
    },
    paddingAtBottom: {
        height: 80, // Altura correspondente ao botão
    },
});