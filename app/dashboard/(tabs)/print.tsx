import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DashboardHeader from '@/components/dashboard-header';

export default function PrintScreen() {
  return (
    <View className="flex-1 bg-green-50">
      <DashboardHeader />
      <View className="flex-1 justify-center items-center">
        <View className="items-center">
          <Text className="text-3xl font-bold text-gray-900 mb-4">Print</Text>
          <Text className="text-lg text-gray-600 mb-6">Print services!</Text>
          <View className="bg-white p-6 rounded-lg shadow-sm max-w-[250px] w-full">
            <View className="flex-row items-center gap-3 mb-4">
              <View className="w-8 h-8 bg-emerald-500 rounded-full justify-center items-center">
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              </View>
              <Text className="text-emerald-700 font-medium">Ready to Print</Text>
            </View>
            <Pressable className="bg-emerald-600 py-2 px-4 rounded-lg w-full items-center">
              <Text className="text-white font-medium">Start Printing</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}