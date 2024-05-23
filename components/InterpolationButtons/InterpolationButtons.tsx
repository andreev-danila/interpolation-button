import { WW } from 'constants/dimensions';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  AnimatedRef,
  Extrapolation,
  interpolate,
  scrollTo,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WithScrollOffset } from 'types/WithScrollOffset';

import { Button } from './Button';
import { Pagination } from './Pagination';

type InterpolationButtonsProps = WithScrollOffset<{
  aref: AnimatedRef<Animated.ScrollView>;
}>;

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export function InterpolationButtons({ aref, scrollOffset }: InterpolationButtonsProps) {
  const handleNavigateToFeed = useCallback(() => {
    'worklet';
    scrollTo(aref, WW, 0, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [0, WW, 2 * WW],
            [-20, -60, -20],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <AnimatedSafeAreaView
      pointerEvents="box-none"
      mode="margin"
      edges={['bottom']}
      style={[styles.container, animatedStyle]}>
      <Pagination scrollOffset={scrollOffset} />
      <Button first scrollOffset={scrollOffset} onPress={handleNavigateToFeed}>
        Back →
      </Button>
      <Button scrollOffset={scrollOffset} onPress={handleNavigateToFeed}>
        ← Feed
      </Button>
    </AnimatedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
