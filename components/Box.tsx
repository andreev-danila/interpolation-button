import { StyleSheet, View, ViewProps } from 'react-native';

type Props = Pick<ViewProps, 'style'>;

export function Box({ style }: Props) {
  return <View style={[styles.box, style]} />;
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
