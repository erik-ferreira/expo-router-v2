import { TouchableOpacity, Text } from "react-native"

interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        backgroundColor: "#8257e5",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
