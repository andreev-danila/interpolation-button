import { WW } from 'constants/dimensions';
import { StyleSheet, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { WithScrollOffset } from 'types/WithScrollOffset';

const dots = Array.from({ length: 3 });

export function Pagination({ scrollOffset }: WithScrollOffset) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [WW - WW / 4, WW, WW + WW / 4],
        [0, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <Animated.View pointerEvents="none" style={[styles.pagination, animatedStyle]}>
      {dots.map((_, index) => {
        const opacity = index === 1 ? 1 : 0.3;

        return <View key={index} style={[styles.paginationDot, { opacity }]} />;
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});
