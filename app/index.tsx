import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";

import "@/global.css";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    console.log("SPLASH SCREEN: useEffect triggered");
    const timer = setTimeout(() => {
      console.log("SPLASH SCREEN: Navigating to dashboard");
      router.replace("/dashboard");
    }, 1000);

    return () => {
      console.log("SPLASH SCREEN: Component unmounting");
      clearTimeout(timer);
    };
  }, [router]);

  console.log("SPLASH SCREEN: Render function called");

  return (
    <View className="flex-1 bg-amber-400 justify-center items-center">
      <Image
        source={require("@/assets/splash-logo.png")}
        className="w-48 h-30 mb-5"
        contentFit="contain"
      />
      <Text className="text-3xl font-bold text-black mb-2">blinkit</Text>
      <Text className="text-base text-black">India&apos;s Last Minute App</Text>
    </View>
  );
}
