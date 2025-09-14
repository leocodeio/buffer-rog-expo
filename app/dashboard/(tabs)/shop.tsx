import React, { useCallback } from 'react';
import { View, Text, Image, FlatList, Pressable, ListRenderItem } from 'react-native';
import DashboardHeader from '@/components/dashboard-header';

export type BestsellerProduct = {
  id: number;
  name: string;
  price: number;
  image: any; // using require for local assets
  quantity: string;
  deliveryTime: number; // in minutes
};

const BESTSELLERS: BestsellerProduct[] = [
  {
    id: 1,
    name: 'Milk',
    price: 27,
    image: require('@/assets/dashboard/cart/bestsellers/bs_01.png'),
    quantity: '500 ML',
    deliveryTime: 10,
  },
  {
    id: 2,
    name: 'Potato (Aloo)',
    price: 37,
    image: require('@/assets/dashboard/cart/bestsellers/bs_02.png'),
    quantity: '1 KG',
    deliveryTime: 8,
  },
  {
    id: 3,
    name: 'Hybrid Tomato',
    price: 37,
    image: require('@/assets/dashboard/cart/bestsellers/bs_03.png'),
    quantity: '1 KG',
    deliveryTime: 6,
  },
];

export default function ShopScreen() {
  const renderItem: ListRenderItem<BestsellerProduct> = useCallback(({ item }) => {
    return (
      <View className="rounded-lg overflow-hidden bg-white border border-white">
        <View className="h-24 w-full relative bg-gray-50 items-center justify-center">
          <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          <Pressable className="bg-white border border-green-500 px-2 py-1 rounded absolute -bottom-2 right-0" onPress={() => {}}>
            <Text className="text-[10px] font-semibold text-green-600">ADD</Text>
          </Pressable>
        </View>
        <View className="p-2">
          <Text numberOfLines={1} className="text-xs font-medium text-gray-900">{item.name}</Text>
          <View className="flex-row items-center gap-1 mt-1">
            <Image source={require('@/assets/dashboard/cart/timer.png')} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
            <Text className="text-[10px] text-gray-500">{item.deliveryTime} mins</Text>
          </View>
          <View className="flex-row items-center justify-between mt-1">
            <Text className="font-bold text-xs">₹ {item.price}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View className="flex-1 bg-white">
      <DashboardHeader />
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24, paddingBottom: 80 }}
        ListHeaderComponent={
          <View className="items-center mb-8">
            <View className="w-48 h-48 relative mb-4 items-center justify-center">
              <Image
                source={require('@/assets/dashboard/cart/cart.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>
            <Text className="font-bold text-xl text-gray-900">Reordering will be easy</Text>
            <Text className="text-center text-gray-600 text-xs mt-2 w-64">
              Items you order will show up here so you can buy them again easily.
            </Text>
            <View className="w-full mt-10">
              <Text className="font-bold text-lg mb-4 text-gray-900">Bestsellers</Text>
            </View>
          </View>
        }
        data={BESTSELLERS}
        numColumns={3}
        columnWrapperStyle={{ gap: 12 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}