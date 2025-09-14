import { View, Text } from 'react-native';
import DashboardHeader from '@/components/dashboard-header';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-slate-50">
      <DashboardHeader />
      <View className="flex-1 justify-center items-center">
        <View className="items-center">
          <Text className="text-3xl font-bold text-gray-900 mb-4">Home</Text>
          <Text className="text-lg text-gray-600">Welcome to your app!</Text>
        </View>
      </View>
    </View>
  );
}
