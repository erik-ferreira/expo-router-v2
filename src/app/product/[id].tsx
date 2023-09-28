import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

export default function Product() {
  const { id } = useLocalSearchParams()

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Product: {id}</Text>
    </View>
  )
}
