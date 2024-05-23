import { WW } from 'constants/dimensions';
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, ViewProps } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { WithScrollOffset } from 'types/WithScrollOffset';

type ButtonProps = PropsWithChildren<
  WithScrollOffset<{
    first?: boolean;
    onPress: () => void;
  }>
>;

export function Button({ first = false, children, scrollOffset, onPress }: ButtonProps) {
  const gesture = Gesture.Tap().onFinalize((_, success) => {
    if (success) {
      onPress();
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = first ? [0, WW - WW / 2, WW] : [WW, WW + WW / 2, 2 * WW];

    const opacityOutputRange = first ? [1, 0.7, 0] : [0, 0.7, 1];
    const scaleOutputRange = first ? [1, 0.6, 0] : [0, 0.6, 1];

    return {
      opacity: interpolate(scrollOffset.value, inputRange, opacityOutputRange, Extrapolation.CLAMP),
      transform: [
        {
          scale: interpolate(
            scrollOffset.value,
            [0, WW, 2 * WW],
            scaleOutputRange,
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedProps = useAnimatedProps<ViewProps>(() => {
    const disabled = first ? scrollOffset.value >= WW : scrollOffset.value <= WW;

    return {
      pointerEvents: disabled ? 'none' : 'auto',
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View animatedProps={animatedProps} style={[styles.button, animatedStyle]}>
        <Text style={styles.label}>{children}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    width: 120,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
