import DashboardHeader from "@/components/dashboard-header";
import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

// Types
interface BestsellerProduct {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: string;
  deliveryTime: number;
}
interface CategoryItem {
  name: string;
  image: any;
}

// Data
const BESTSELLERS: BestsellerProduct[] = [
  {
    id: 1,
    name: "Milk",
    price: 27,
    image: require("@/assets/dashboard/cart/bestsellers/bs_01.png"),
    quantity: "500 ML",
    deliveryTime: 10,
  },
  {
    id: 2,
    name: "Potato (Aloo)",
    price: 37,
    image: require("@/assets/dashboard/cart/bestsellers/bs_02.png"),
    quantity: "1 KG",
    deliveryTime: 8,
  },
  {
    id: 3,
    name: "Hybrid Tomato",
    price: 37,
    image: require("@/assets/dashboard/cart/bestsellers/bs_03.png"),
    quantity: "1 KG",
    deliveryTime: 6,
  },
];

const GROCERY_CATEGORY: { title: string; items: CategoryItem[] } = {
  title: "Grocery & Kitchen",
  items: [
    {
      name: "Vegetables & Fruits",
      image: require("@/assets/dashboard/catalog/cat_01.png"),
    },
    {
      name: "Atta, Dal & Rice",
      image: require("@/assets/dashboard/catalog/cat_02.png"),
    },
    {
      name: "Oil, Ghee & Masala",
      image: require("@/assets/dashboard/catalog/cat_03.png"),
    },
    {
      name: "Dairy, Bread & Milk",
      image: require("@/assets/dashboard/catalog/cat_04.png"),
    },
    {
      name: "Biscuits & Snacks",
      image: require("@/assets/dashboard/catalog/cat_05.png"),
    },
    {
      name: "Tea & Coffee",
      image: require("@/assets/dashboard/catalog/cat_08.png"),
    },
  ],
};

const DIWALI_CATEGORIES = [
  {
    id: 2,
    title: "Sweets",
    subtitle: "Gifts",
    image: require("@/assets/dashboard/main/diwali/diw_02.png"),
  },
  {
    id: 5,
    title: "Decoration",
    subtitle: "& Lights",
    image: require("@/assets/dashboard/main/diwali/diw_01.png"),
  },
  {
    id: 3,
    title: "Appliances",
    subtitle: "& Gadgets",
    image: require("@/assets/dashboard/main/diwali/diw_03.png"),
  },
  {
    id: 4,
    title: "Home",
    subtitle: "& Living",
    image: require("@/assets/dashboard/main/diwali/diw_04.png"),
  },
  {
    id: 6,
    title: "Dry Fruits",
    subtitle: "& Nuts",
    image: require("@/assets/dashboard/main/diwali/diw_02.png"),
  },
];

export default function HomeScreen() {
  const renderBestseller: ListRenderItem<BestsellerProduct> = useCallback(
    ({ item }) => (
      <View className="rounded-lg overflow-hidden bg-white border border-white">
        <View className="h-24 w-full relative bg-gray-50 items-center justify-center">
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
          <Pressable
            className="bg-white border border-green-500 px-2 py-1 rounded absolute -bottom-2 right-0"
            onPress={() => {}}
          >
            <Text className="text-[10px] font-semibold text-green-600">
              ADD
            </Text>
          </Pressable>
        </View>
        <View className="p-2">
          <Text numberOfLines={1} className="text-xs font-medium text-gray-900">
            {item.name}
          </Text>
          <View className="flex-row items-center gap-1 mt-1">
            <Image
              source={require("@/assets/dashboard/cart/timer.png")}
              style={{ width: 14, height: 14, resizeMode: "contain" }}
            />
            <Text className="text-[10px] text-gray-500">
              {item.deliveryTime} mins
            </Text>
          </View>
          <View className="flex-row items-center justify-between mt-1">
            <Text className="font-bold text-xs">₹ {item.price}</Text>
          </View>
        </View>
      </View>
    ),
    []
  );

  const renderCategoryItem = useCallback(
    (item: CategoryItem) => (
      <Pressable key={item.name} className="w-24 mr-3" onPress={() => {}}>
        <View className="w-24 h-24 bg-[#D9EBEB] rounded-lg shadow-sm items-center justify-center p-2 mb-2">
          <Image
            source={item.image}
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
          />
        </View>
        <Text
          numberOfLines={2}
          className="text-[11px] font-medium text-gray-700 leading-tight"
        >
          {item.name}
        </Text>
      </Pressable>
    ),
    []
  );

  return (
    <View className="bg-white w-screen h-screen">
      <DashboardHeader />
      {/* Diwali Sale Banner */}
        <View className="w-full h-48 mx-0 overflow-hidden bg-red-500 border border-t-white border-x-red-500 border-b-red-500 py-6">
          <View className="absolute inset-0 flex flex-col justify-center px-4 w-full">
            <View className="items-center w-full">
              <Text className="text-2xl font-bold text-white">
                Mega Diwali Sale
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 12 }}
            >
              <View className="flex-row gap-3 px-1">
                {DIWALI_CATEGORIES.map((c) => (
                  <View
                    key={c.id}
                    className="bg-gray-200 p-2 rounded-lg items-center w-24 h-32 shadow-sm"
                  >
                    <Text className="text-[11px] font-medium text-center">
                      {c.title}
                    </Text>
                    <Text className="text-[11px] font-medium text-center">
                      {c.subtitle}
                    </Text>
                    <View className="w-12 h-18 mt-1 items-center justify-center">
                      <Image
                        source={c.image}
                        style={{
                          width: 48,
                          height: 48,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
      </View>

      {/* Bestsellers */}
      <View className="px-4 mb-8">
        <Text className="font-bold text-xl mb-4 text-gray-900">
          Bestsellers
        </Text>
        <FlatList
          data={BESTSELLERS}
          renderItem={renderBestseller}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={{ gap: 12 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      </View>

      {/* Grocery & Kitchen Category Slider */}
      <View className="px-4 mb-8">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-bold text-gray-900">
            {GROCERY_CATEGORY.title}
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          <View className="flex-row">
            {GROCERY_CATEGORY.items.map(renderCategoryItem)}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
