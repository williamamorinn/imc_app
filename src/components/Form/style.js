import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    form: {
        backgroundColor: '#800000',
        padding: 30,
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    alerta: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
        backgroundColor: '#F00',
        borderRadius: 5,
        padding: 10,
    },

    label: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
    },

    input: {
        fontSize: 20,
        borderRadius: 10,
        backgroundColor:'#DDD',
        padding: 10,
        marginBottom: 20,
    },

    buttom: {
        backgroundColor: '#F2B73F',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default styles