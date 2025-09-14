import React, { useCallback } from 'react';
import { View, Text, Image, FlatList, ListRenderItem, ScrollView, Pressable } from 'react-native';
import DashboardHeader from '@/components/dashboard-header';

// Category & item types
interface CategoryItem {
  name: string;
  image: any; // local asset via require
}
interface CategorySection {
  title: string;
  items: CategoryItem[];
}

const CATEGORIES: CategorySection[] = [
  {
    title: 'Grocery & Kitchen',
    items: [
      { name: 'Vegetables & Fruits', image: require('@/assets/dashboard/catalog/cat_01.png') },
      { name: 'Atta, Dal & Rice', image: require('@/assets/dashboard/catalog/cat_02.png') },
      { name: 'Oil, Ghee & Masala', image: require('@/assets/dashboard/catalog/cat_03.png') },
      { name: 'Dairy, Bread & Milk', image: require('@/assets/dashboard/catalog/cat_04.png') },
      { name: 'Biscuits, Snacks & Chocolates', image: require('@/assets/dashboard/catalog/cat_05.png') },
      { name: 'Dry Fruits & Cereals', image: require('@/assets/dashboard/catalog/cat_06.png') },
      { name: 'Kitchen & Appliances', image: require('@/assets/dashboard/catalog/cat_07.png') },
      { name: 'Tea & Coffee', image: require('@/assets/dashboard/catalog/cat_08.png') },
      { name: 'Ice-Creams & Frozen Foods', image: require('@/assets/dashboard/catalog/cat_09.png') },
      { name: 'Noodles, Sauces & Instant Food', image: require('@/assets/dashboard/catalog/cat_10.png') },
    ],
  },
  {
    title: 'Snacks & Drinks',
    items: [
      { name: 'Chips & Namkeens', image: require('@/assets/dashboard/catalog/cat_11.png') },
      { name: 'Sweets & Chocolates', image: require('@/assets/dashboard/catalog/cat_12.png') },
      { name: 'Drinks & Juices', image: require('@/assets/dashboard/catalog/cat_01.png') },
      { name: 'Sauces & Spreads', image: require('@/assets/dashboard/catalog/cat_02.png') },
      { name: 'Ready to Cook', image: require('@/assets/dashboard/catalog/cat_03.png') },
    ],
  },
  {
    title: 'Household Essentials',
    items: [
      { name: 'Cleaning Essentials', image: require('@/assets/dashboard/catalog/cat_04.png') },
      { name: 'Detergents', image: require('@/assets/dashboard/catalog/cat_05.png') },
      { name: 'Fresheners', image: require('@/assets/dashboard/catalog/cat_06.png') },
      { name: 'Tissues & Rolls', image: require('@/assets/dashboard/catalog/cat_07.png') },
    ],
  },
];

export default function CatalogScreen() {
  const renderItem: ListRenderItem<CategoryItem> = useCallback(({ item }) => {
    return (
      <Pressable className="w-28 mr-3" onPress={() => {}}>
        <View className="w-28 h-28 bg-[#D9EBEB] rounded-lg shadow-sm items-center justify-center p-2 mb-2">
          <Image source={item.image} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />
        </View>
        <Text numberOfLines={2} className="text-[11px] font-medium text-gray-700 leading-tight">
          {item.name}
        </Text>
      </Pressable>
    );
  }, []);

  return (
    <View className="flex-1 bg-gray-50">
      <DashboardHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 96 }} showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-6">
          {CATEGORIES.map((section) => (
            <View key={section.title} className="mb-8">
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-lg font-bold text-gray-900">{section.title}</Text>
              </View>
              <FlatList
                horizontal
                data={section.items}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}