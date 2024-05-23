import { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

export function Typography({ children }: PropsWithChildren) {
  return <Text style={styles.typography}>{children}</Text>;
}

const styles = StyleSheet.create({
  typography: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
});
