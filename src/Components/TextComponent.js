import { Text } from "react-native";
import { styles } from "../styles/Stylesheet";

export default function TextComponent({ txt }) {
  return <Text style={styles.txt}>{txt}</Text>;
}
