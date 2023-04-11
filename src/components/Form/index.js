import { TextInput, View, Text, TouchableOpacity } from "react-native";
import Result from "./Result";
import styles from "./style";
import { useState } from "react";

export default function Form(){

    const [valorPeso, setValorPeso] = useState(null)
    const [valorAltura, setValorAltura] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calculoImc(valorPesoFormat, valorAlturaFormat){
        let resultadoImc = (Number.parseFloat(valorPesoFormat) / Number.parseFloat(valorAlturaFormat**2))
        setImc(resultadoImc)
        resultado(resultadoImc)
    }

    function resultado(imc){
        
        if(imc > 0 && imc < 18.5){
            setMsgResultado("Você está com o Peso baixo.")

        }else if(imc >= 18.5 && imc < 25){
            setMsgResultado("Você está com o Peso normal.")

        }else if(imc >= 25 && imc < 30){
            setMsgResultado("Você está com Sobrepeos.")

        }else if(imc >= 30 && imc < 35){
            setMsgResultado("Você está com Obesidade Grau I.")

        }else if(imc >= 35 && imc < 40){
            setMsgResultado("Você está com Obesidade Severa Grau II.")

        }else if(imc >= 40){
            setMsgResultado("Você está com Obesidade Mórbida Grau III.")
        }
    }

    function validacao(){
        if(valorPeso != null && valorAltura != null){

            let valorPesoFormat = valorPeso.replace("," , ".")
            let valorAlturaFormat = valorAltura.replace("," , ".")

            if(valorPesoFormat > 0 && valorAlturaFormat > 0){
                calculoImc(valorPesoFormat, valorAlturaFormat)
                setValorAltura(null)
                setValorPeso(null)
                setMsgCalculo(null)
                setTextButton("Calcular Novamente")

            }else{
                setValorAltura(null)
                setValorPeso(null)
                setMsgCalculo("Valor inválido")
                setTextButton("Calcular")
            }
            
        }else{
            setImc(null)
            setMsgCalculo("Preencha o peso e a altura!")
        }
    }

    return(
         <View style={styles.form}>
            {imc == null ?
                <View>
                    {msgCalculo != null && (
                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}

                    <Text style={styles.label}>Peso</Text>
                    <TextInput style={styles.input} keyboardType="numeric" value={valorPeso} onChangeText={setValorPeso}/>

                    <Text style={styles.label}>Altura</Text>
                    <TextInput style={styles.input} keyboardType="numeric" value={valorAltura} onChangeText={setValorAltura}/>

                    <TouchableOpacity onPress={() => validacao()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result imc={imc} msgResultado={msgResultado}/>
                    <TouchableOpacity onPress={() => validacao()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}