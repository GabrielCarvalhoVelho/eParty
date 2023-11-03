import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function FestaCarousel({ festas, navigation }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {festas.map((festa) => (
        <TouchableOpacity
          key={festa.nome}
          style={styles.square}
          onPress={() => {
            navigation.navigate('DetalhesFesta', { festa });
          }}
        >
          <Text style={styles.squareTitle}>{festa.nome}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.squareDate}>{festa.data}</Text>
          </View>
          <Text style={styles.squareStatus}>{festa.status}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 260,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    // Adicione sombra para dar uma sensação de elevação
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
  },
  squareTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, // Espaçamento superior
    color: 'purple'
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareDate: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold', // Tornar a data mais destacada
  },
  squareStatus: {
    fontSize: 14,
    textAlign: 'center',
    color: 'green',
    marginTop: 5, // Espaçamento superior
  },
});
