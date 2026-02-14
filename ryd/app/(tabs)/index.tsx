// 
import { Text, View, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-4xl font-bold text-blue-500">
        Hello NativeWind!
      </Text>
    </View>
  );
}