import { SharedValue } from 'react-native-reanimated';

export type WithScrollOffset<T = unknown> = T & {
  scrollOffset: SharedValue<number>;
};
