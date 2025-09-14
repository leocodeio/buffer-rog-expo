import { View, Text, Image } from 'react-native';
import DashboardHeader from '@/components/dashboard-header';
import { Button } from '@/components/ui/button';

export default function PrintScreen() {
  return (
    <View className="flex-1 bg-amber-50">
      <DashboardHeader />
      <View className="flex-1 px-4 items-center">
        <View className="w-full max-w-md pt-8">
          <Text className="text-3xl font-bold mb-1 ml-2 text-center text-gray-900">Print Store</Text>
          <Text className="text-gray-400 text-xs mb-6 ml-2 text-center">Blinkit ensures secure prints at every stage</Text>

          <View className="bg-white p-4 w-full rounded-md shadow-sm flex-row gap-4 items-center">
            <View className="flex-1">
              <Text className="font-bold mb-3 text-gray-900">Documents</Text>
              <View className="mb-4">
                {[
                  'Price starting at Rs 3/page',
                  'Paper quality: 70 GSM',
                  'Single side prints',
                ].map((item) => (
                  <View key={item} className="flex-row items-center mb-1">
                    <Text className="text-gray-400 mr-2">◆</Text>
                    <Text className="text-gray-500 text-xs">{item}</Text>
                  </View>
                ))}
              </View>
              <Button
                label="Upload Files"
                variant="secondary"
                className="bg-green-500 active:opacity-90"
                onPress={() => {}}
              />
            </View>
            <View className="w-24 h-24 relative">
              <Image
                source={require('@/assets/dashboard/print/print.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}