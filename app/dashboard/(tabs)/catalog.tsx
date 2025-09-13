import { View, Text } from 'react-native';

export default function CatalogScreen() {
  return (
    <View className="flex-1 bg-gray-50 justify-center items-center">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-900 mb-4">Catalog</Text>
        <Text className="text-lg text-gray-600 mb-6">Browse our catalog!</Text>
        
        <View className="flex-row gap-4 max-w-[300px]">
          <View className="bg-white p-4 rounded-lg shadow-sm flex-1">
            <View className="w-full h-20 bg-gray-200 rounded mb-3" />
            <Text className="text-sm text-gray-700">Product 1</Text>
          </View>
          <View className="bg-white p-4 rounded-lg shadow-sm flex-1">
            <View className="w-full h-20 bg-gray-200 rounded mb-3" />
            <Text className="text-sm text-gray-700">Product 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}