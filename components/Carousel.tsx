import { WW } from 'constants/dimensions';
import Animated, { useAnimatedRef, useScrollViewOffset } from 'react-native-reanimated';

import { FeedContent } from './FeedContent';
import { InterpolationButtons } from './InterpolationButtons';
import { ProfileContent } from './ProfileContent';
import { SettingsContent } from './SettingsContent';

export function Carousel() {
  const aref = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(aref);

  return (
    <>
      <Animated.ScrollView
        horizontal
        ref={aref}
        decelerationRate="fast"
        snapToInterval={WW}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        <SettingsContent />
        <FeedContent />
        <ProfileContent />
      </Animated.ScrollView>
      <InterpolationButtons aref={aref} scrollOffset={scrollOffset} />
    </>
  );
}
