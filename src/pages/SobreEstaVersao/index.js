import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SobreEstaVersao({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            title: 'Sobre esta versão', // Define o título no Header
            // Outras opções de cabeçalho podem ser configuradas aqui
        });
    }, []);

    const versaoApp = "1.0.0"; // Substitua pelo número da versão do seu aplicativo

    const handleCopiarVersao = async () => {
        await Clipboard.setString(versaoApp); // Copia a versão para a área de transferência
    };

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Versão: {versaoApp}</Text>
                <TouchableOpacity onPress={handleCopiarVersao}>
                    <Icon name="copy" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    infoText: {
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 20,
    },
});
