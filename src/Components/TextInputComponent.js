import { TextInput } from "react-native";
import { styles } from "../styles/Stylesheet";

export default function TextinputComponent({ input, changeText, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={input}
      value={value}
      onChangeText={changeText}
    />
  );
}
