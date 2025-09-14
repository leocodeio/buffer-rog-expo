import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SLIDE_IMAGES = [
  require("@/assets/auth/auth_01.png"),
  require("@/assets/auth/auth_02.png"),
  require("@/assets/auth/auth_03.png"),
  require("@/assets/auth/auth_04.png"),
  require("@/assets/auth/auth_05.png"),
  require("@/assets/auth/auth_06.png"),
];

type MarqueeRowProps = {
  imageSources: any[];
  reverse?: boolean;
  speed?: number;
};

function MarqueeRow({ imageSources, reverse = false, speed = 50 }: MarqueeRowProps) {
  const IMAGE_WIDTH = 120;
  const GAP = 16;
  const totalWidth = imageSources.length * (IMAGE_WIDTH + GAP);

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(reverse ? totalWidth : -totalWidth, {
        duration: (totalWidth + SCREEN_WIDTH) * speed,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [reverse, totalWidth, speed, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View className="w-full overflow-hidden mb-4">
      <Animated.View style={[{ flexDirection: 'row', alignItems: 'center' }, animatedStyle]}>
        {imageSources.map((src, idx) => (
          <View
            key={`img-${idx}`}
            className="min-w-[120px] max-w-[150px] p-3 rounded-xl bg-white shadow-sm border border-gray-100 mr-4"
          >
            <View className="h-[80px] w-[80px] mb-2 self-center">
              <Image
                source={src}
                style={{ width: 80, height: 80 }}
                contentFit="contain"
              />
            </View>
          </View>
        ))}
        {/* Duplicate for seamless looping */}
        {imageSources.map((src, idx) => (
          <View
            key={`img-dup-${idx}`}
            className="min-w-[120px] max-w-[150px] p-3 rounded-xl bg-white shadow-sm border border-gray-100 mr-4"
          >
            <View className="h-[80px] w-[80px] mb-2 self-center">
              <Image
                source={src}
                style={{ width: 80, height: 80 }}
                contentFit="contain"
              />
            </View>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

function ImageSlideShow() {
  return (
    <View className="w-full py-6 overflow-hidden bg-white">
      <MarqueeRow imageSources={SLIDE_IMAGES} reverse={false} speed={30} />
      <MarqueeRow imageSources={SLIDE_IMAGES} reverse={true} speed={40} />
      <MarqueeRow imageSources={SLIDE_IMAGES} reverse={false} speed={50} />
    </View>
  );
}

function LandingImgLogo({ className }: { className?: string }) {
  return (
    <Image
      source={require("@/assets/blinkit.png")}
      contentFit="contain"
      style={{ width: 200, height: 100 }}
      className={className}
    />
  );
}

export default function LandingScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/dashboard");
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingVertical: 32, paddingHorizontal: 16 }}
    >
      <View className="flex-1 flex-col gap-3">
        <View className="w-full -mx-4 mb-2">
          <ImageSlideShow />
        </View>

        <View className="w-full flex items-center justify-center">
          <LandingImgLogo />
        </View>

        <Text className="text-center text-3xl font-extrabold mt-2">
          India&apos;s last minute app
        </Text>

        <View className="max-w-md w-full self-center bg-white rounded-3xl shadow shadow-gray-300 overflow-hidden p-6 items-center border border-gray-100">
          <Text className="text-2xl font-bold mb-1">xxxx</Text>
          <Text className="text-gray-400 mb-6">xxxxxxxxx</Text>

          <Pressable
            onPress={handleLogin}
            className="w-full h-12 bg-[#ff1557] rounded-lg mb-4 flex-row items-center justify-center active:opacity-90"
            accessibilityRole="button"
            accessibilityLabel="Login with Zomato"
          >
            <Text className="mr-2 font-medium text-lg text-white">
              Login with
            </Text>
            <Text className="font-bold text-xl text-white">zomato</Text>
          </Pressable>

          <Text className="text-sm text-gray-400 mb-8 text-center">
            Access your saved addresses from Zomato automatically!
          </Text>

          <Pressable onPress={handleLogin} accessibilityRole="link">
            <Text className="text-green-600 text-lg">
              or login with phone number
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
