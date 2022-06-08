import { View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function BottomSheetPost({ children }) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT + 528, { damping: 15 });
  }, []);

  return (
      <Animated.View
        style={[
          styles.container,
          rBottomSheetStyle,
          { top: SCREEN_HEIGHT },
        ]}
      >
        {children}
      </Animated.View>
  );
}
