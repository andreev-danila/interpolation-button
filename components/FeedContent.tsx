import { WH } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

import { Box } from './Box';
import { Container } from './Container';
import { Typography } from './Typography';

export function FeedContent() {
  return (
    <Container>
      <Typography>Feed</Typography>
      <Box style={styles.feedBox} />
    </Container>
  );
}

const styles = StyleSheet.create({
  feedBox: {
    height: WH * 0.75,
    marginTop: 24,
  },
});
