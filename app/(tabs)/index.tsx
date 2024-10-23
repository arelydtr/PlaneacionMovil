import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import TabLayout from './_layout'; // Importa el componente de las tabs

// Importa el logo y las imágenes
const logo = require('../../assets/images/logo.png'); // Cambia la ruta si es necesario
const icon = require('../../assets/images/icon.png'); // Asegúrate de que la ruta a icon.png sea correcta

const images = [
    require('../../assets/images/main4.jpg'), // Cambia esto por las imágenes correctas
    require('../../assets/images/main2.jpg'),
    require('../../assets/images/main3.jpg'),
];

// Datos de ejemplo para las tarjetas de prendas
const products = [
    { id: 1, name: 'Prenda 1', image: require('../../assets/images/ropa1.jpg') },
    { id: 2, name: 'Prenda 2', image: require('../../assets/images/ropa2.jpg') },
    { id: 3, name: 'Prenda 3', image: require('../../assets/images/ropa3.jpg') },
    // Agrega más productos aquí
];


/*

    git init

    git add .

    git commit -m "Aqui va un comentario acerca del commit"

    git push origin main, master o cualquier otra rama

*/

export default function Index() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <ScrollView style={styles.container}>
            {/* Aquí inserta el logo */}
            <Image
                source={logo} // Usa el logo
                style={styles.logo} // Aplica el estilo que desees
            />

            {/* Aquí inserta la imagen que cambia */}
            <Image
                source={images[currentImageIndex]} // Usa la imagen actual
                style={styles.image} // Aplica el estilo que desees
            />

            {/* Aquí inserta el texto descriptivo */}
            <Text style={styles.description}>¡Bienvenido a nuestra aplicación!</Text>

            {/* Aquí se agregan las tarjetas de presentación */}
            <View style={styles.cardsContainer}>
                {products.map(product => (
                    <View key={product.id} style={styles.card}>
                        <Image source={product.image} style={styles.cardImage} />
                        <Text style={styles.cardText}>{product.name}</Text>
                    </View>
                ))}
            </View>

            <TabLayout />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8', // Fondo claro
    },
    logo: {
        position: 'absolute', // Hace que el logo sea estático
        top: 50,              // Ajusta la posición desde la parte superior
        width: 380,          // Ajusta el ancho del logo
        height: 100,         // Ajusta el alto del logo
    },
    image: {
        position: 'absolute', // Hace que la imagen sea estática
        top: 150,             // Ajusta la posición desde la parte superior
        width: 380,           // Ancho de la imagen
        height: 200,          // Alto de la imagen
    },
    description: {
        fontSize: 18,         // Tamaño de la fuente
        fontWeight: 'bold',   // Peso de la fuente
        color: '#333',        // Color del texto
        marginTop: 400,       // Espacio desde la imagen hasta el texto
        textAlign: 'center',   // Centra el texto
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20, // Espacio entre el texto y las tarjetas
    },
    card: {
        width: '45%',      // Ancho de cada tarjeta (ajusta según necesites)
        borderRadius: 10,  // Bordes redondeados
        marginBottom: 20,  // Espacio inferior entre las tarjetas
        backgroundColor: '#fff', // Fondo blanco para las tarjetas
        shadowColor: '#000', // Sombra para dar profundidad
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3, // Efecto de elevación para Android
        alignItems: 'center', // Centra el contenido de la tarjeta
    },
    cardImage: {
        width: '100%', // Ajusta el ancho de la imagen de la tarjeta
        height: 150,   // Altura de la imagen de la tarjeta
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardText: {
        fontSize: 16,   // Tamaño de la fuente en las tarjetas
        fontWeight: 'bold', // Peso de la fuente
        marginVertical: 10, // Espacio vertical
    },
});
