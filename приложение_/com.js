import React from "react";
import { Button, View } from "react-native";

export default function MyComponent() {
    return (
        <View>
            <Button title="Press me" color="#1ACDA5"/>
        </View>
    )
}

// export default function Couter() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       const id = setInterval(() => setCount((count) => count + 1), 1000);
  
//       return () => clearInterval(id);
//     }, []);
  
//     return <Text style={{ fontSize: 120 }}>{count}</Text>
    
//   }
  

// function CounterButton({ title, onIncrement }) {
//     return <Button title={title} onPress={onIncrement} />
//   }
  
//   export default function App() {
//     const [count, setCount] = useState(0)
  
//     return (
//       <CounterButton
//         title={`Click HERE to increment: ${count}`}
//         onIncrement={() => setCount(count + 1)}
//       />
//     )
//   }
  
  