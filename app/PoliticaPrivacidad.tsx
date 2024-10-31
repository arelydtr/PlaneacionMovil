import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PoliticaPrivacidad() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Política de Privacidad</Text>
            <Text style={styles.text}>
                Aquí puedes detallar la política de privacidad de Alevosía Boutique.
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'justify',
    },
    backText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
