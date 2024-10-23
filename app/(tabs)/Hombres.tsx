import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hombres() {
    return (
        <View style={styles.container}>
            <Text>Hombres</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra los elementos verticalmente
        alignItems: 'center',      // Centra los elementos horizontalmente
        padding: 20,
        backgroundColor: '#f0f0f0', // Fondo claro
    },
});
