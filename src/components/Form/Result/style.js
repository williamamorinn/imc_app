import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    resultadoImc: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
        color: 'white',
    },

    imc: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: 'yellow',
    },
    
    corPesoNormal: {
        backgroundColor: 'green',
    },
    
    corSobrepeso: {
        backgroundColor: 'pink',
    },
    
    corObesidade: {
        backgroundColor: 'orange',
    },
    
    corObesidadeSevera: {
        backgroundColor: 'tomato',
    },

    corObesidadeMorbida: {
        backgroundColor: 'red',
    },
});

export default styles