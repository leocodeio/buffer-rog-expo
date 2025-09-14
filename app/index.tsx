import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

import "@/global.css";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    console.log("SPLASH SCREEN: useEffect triggered");
    const timer = setTimeout(() => {
      console.log("SPLASH SCREEN: Navigating to landing");
      router.replace("/landing");
    }, 1000);

    return () => {
      console.log("SPLASH SCREEN: Component unmounting");
      clearTimeout(timer);
    };
  }, [router]);

  console.log("SPLASH SCREEN: Render function called");

  return (
    <View className="flex-1 bg-[#F7CB45] justify-center items-center">
      <Image
        source={require("@/assets/splash-logo.png")}
        contentFit="contain"
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
