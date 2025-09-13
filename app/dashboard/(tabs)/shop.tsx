import { View, Text } from 'react-native';

export default function ShopScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-900 mb-4">Shop</Text>
        <Text className="text-lg text-gray-600">Welcome to the Shop!</Text>
        <View className="mt-6 p-4 bg-blue-50 rounded-lg">
          <Text className="text-blue-700">Browse our amazing products</Text>
        </View>
      </View>
    </View>
  );
}