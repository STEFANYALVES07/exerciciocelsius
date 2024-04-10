import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/Stylesheet";
import TextinputComponent from "../Components/TextInputComponent";
import React, { useState } from "react";
import TextComponent from "../Components/TextComponent";

export default function Home() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [resultado, setResultado] = useState("");

  console.log("Resultado: ", resultado);

  const calculadora = () => {
    const resultado = (celsius * 9) / 5 + 32;
    setFahrenheit(resultado);
  };

  return (
    <View style={styles.container}>
      <TextComponent txt={"Calcular Fahrenheit"} />
      <TextinputComponent
        input="Digite a temperatura em celsius"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity onPress={calculadora}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>{fahrenheit}</Text>
    </View>
  );
}
