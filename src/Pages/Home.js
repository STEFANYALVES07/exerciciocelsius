//importando componentes
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/Stylesheet";
import TextinputComponent from "../Components/TextInputComponent";
import React, { useState } from "react";
import TextComponent from "../Components/TextComponent";

export default function Home() {
  // Declarando novas variáveis de state
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [resultado, setResultado] = useState("");

  //Para a conta aparecer no console log
  console.log("Resultado: ", resultado);

  //Criando a constante responsável pela conta junto dela coloquei um alerta caso o input esteja vasio e coloquei uma "funçao" pra limpar o campo após a conversão da temperatura.
  const calculadora = () => {
    if (celsius != "") {
      const resultado = (celsius * 9) / 5 + 32;
      setFahrenheit(resultado);
      setCelsius("");
    } else {
      alert("É necessario digitar a temperatura!");
    }
  };

  return (
    //exportando os componentes e criando o input e o botão
    <View style={styles.container}>
      <TextComponent txt={"Calcular Fahrenheit"} />
      <TextinputComponent
        input="Digite a temperatura em celsius"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity style={styles.btn} onPress={calculadora}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>{fahrenheit}</Text>
    </View>
  );
}
