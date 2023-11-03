import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('usuarios.db');

export default function LoginCadastro() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ text: '', color: 'transparent' });


    const showMessage = (text, color) => {
        setMessage({ text, color });
        setTimeout(() => setMessage({ text: '', color: 'transparent' }), 5000); // 5000 milissegundos = 5 segundos
    };

    const handleLogin = () => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM usuarios WHERE username = ? AND email = ? AND senha = ?',
                [username, email, password],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        navigation.navigate('Dashboard')
                    } else {
                        showMessage('Erro no login, verifique e tente novamente.', 'red');
                    }
                }
            );
        });
    };

    const handleRegister = () => {
        if (username && email && password) {
            db.transaction(tx => {
                tx.executeSql(
                    'INSERT INTO usuarios (username, email, senha) VALUES (?, ?, ?)',
                    [username, email, password],
                    () => showMessage('Conta cadastrada com sucesso!', 'green')
                );
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, senha TEXT);'
            );
        });
    }, []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/seu-logo.png')} />
                    <Text style={styles.title}>
                        Bem-vindo ao e<Text style={styles.titlePurple}>Party</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Entre com sua conta ou crie uma nova para planejar a sua festa
                    </Text>
                </View>

                <Text style={[styles.message, { color: message.color }]}>
                    {message.text}
                </Text>

                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário"
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />

                    <TouchableOpacity
                        style={[styles.button, styles.loginButton]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.cadastroButton]}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2', // Fundo cinza claro
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        backgroundColor: 'white', // Container branco
        padding: 20,
        borderRadius: 10,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 250,
        height: 250
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
        color: 'green',
    },
    titlePurple: {
        color: 'purple',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: 'gray'
    },
    formContainer: {
        width: '100%',
    },
    input: {
        height: 40,
        borderBottomWidth: 1, // Atribui uma borda apenas na parte inferior
        borderColor: 'gray', // Cor da borda inferior
        marginVertical: 10,
        paddingLeft: 10,
        fontSize: 16
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: 'green', // Cor do botão de Login
    },
    cadastroButton: {
        backgroundColor: 'purple', // Cor do botão de Cadastro
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    message: {
        marginTop: 10,
        position: 'absolute',
        width: '100%',
        marginLeft: 20,
        fontSize: 16,
    },
    successMessage: {
        color: 'green',
    },
    errorMessage: {
        color: 'red',
    },
});
