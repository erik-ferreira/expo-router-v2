import { forwardRef } from "react"
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={{
          width: 200,
          backgroundColor: "#8257e5",
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
        {...rest}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
)
