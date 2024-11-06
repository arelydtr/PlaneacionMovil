import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PoliticaPrivacidad() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Política de Privacidad</Text>
            <Text style={styles.text}>
            Alevosía, con domicilio en Calle Zacatecas 1, Colonia Centro, Ciudad Huejutla de Reyes, Municipio o Delegación Huejutla, C.P. 43000, en la entidad de Hidalgo, país México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: 
            </Text>

            <Text style={styles.title}>1. Almacenamiento y Compartición de Datos Personales:</Text>
            <Text style={styles.text}>
            Los datos personales se almacenan de manera segura y solo se comparten con terceros necesarios para completar los pedidos (por ejemplo, empresas de envío). Mantenemos medidas de seguridad para proteger los datos contra acceso no autorizado. Los datos personales que se emplean son: 
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
