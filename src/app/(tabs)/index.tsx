import { Link } from "expo-router"
import { View, Text } from "react-native"

import { Button } from "@/components/Button"

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Home</Text>

      <Link href="/product/11" asChild>
        <Button title="Configurações" />
      </Link>
    </View>
  )
}
