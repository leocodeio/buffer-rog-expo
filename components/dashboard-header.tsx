"use client";

import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  // Determine if we are on the main/home tab (multiple possible path shapes)
  const isMain =
    pathname === "/dashboard/main" ||
    pathname === "/dashboard" ||
    pathname === "/dashboard/(tabs)" ||
    pathname === "/dashboard/(tabs)/index";

  return (
    <View
      style={{ paddingTop: insets.top + 20 }}
      className={`px-4 py-6 bg-[#F8CB46] ${isMain ? "bg-red-500" : ""}`}
    >
      <View className="flex flex-col gap-3">
        {/* Top Row: Title and User Icon */}
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-extrabold text-xs">Blinkit in</Text>
            <Text className="font-extrabold text-xl leading-tight">16 minutes</Text>
          </View>
          <TouchableOpacity className="bg-white rounded-full w-8 h-8 items-center justify-center">
            <Ionicons name="person" size={20} color="#11181C" />
          </TouchableOpacity>
        </View>

        {/* Middle Row: Location */}
        <View className="flex-row items-center gap-1">
          <Text className="text-[10px] font-extrabold">HOME -</Text>
          <Text className="text-[10px] font-medium" numberOfLines={1}>
            Sujal Dave, Ratanada, Jodhpur (Raj)
          </Text>
          <Ionicons name="chevron-down" size={14} color="#11181C" />
        </View>

        {/* Search Bar */}
        <View className="relative my-2">
          <TextInput
            placeholder='Search "ice-cream"'
            className="w-full py-2 pl-9 pr-9 bg-white rounded-lg text-sm"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
          <View className="absolute left-2 top-1/2 -translate-y-1/2">
            <Ionicons name="search" size={20} color="#9CA3AF" />
          </View>
          <View className="absolute right-2 top-1/2 -translate-y-1/2">
            <Ionicons name="mic-outline" size={20} color="#9CA3AF" />
          </View>
        </View>
      </View>
    </View>
  );
}
