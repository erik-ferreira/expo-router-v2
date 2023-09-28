import { Link } from "expo-router"
import { View, Text, Button } from "react-native"

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Home</Text>

      <Link href="/settings" asChild>
        <Button title="Configurações" />
      </Link>
    </View>
  )
}
