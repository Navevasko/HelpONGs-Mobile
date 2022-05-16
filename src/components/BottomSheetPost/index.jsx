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

export default function BottomSheetPost({children}) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart((event) => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 527);
    })
    .onEnd((event) => {
      if (translateY.value > -SCREEN_HEIGHT + 527) {
        translateY.value = withSpring(-SCREEN_HEIGHT + 710, { damping: 15 });
      } else if (translateY.value > -SCREEN_HEIGHT) {
        translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 500);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT + 527, { damping: 15 });
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.container,
          rBottomSheetStyle,
          { top: SCREEN_HEIGHT },
        ]}
      >
        <View style={styles.line}></View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
