import { WH } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

import { Box } from './Box';
import { Container } from './Container';
import { Typography } from './Typography';

export function ProfileContent() {
  return (
    <Container>
      <Typography>Profile</Typography>
      <Box style={styles.profileAvatar} />
      <Box style={styles.profileBoxSmall} />
      <Box style={styles.profileBoxBig} />
    </Container>
  );
}

const AVATAR_SIZE = 100;

const styles = StyleSheet.create({
  profileAvatar: {
    alignSelf: 'center',
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 24,
  },
  profileBoxSmall: {
    height: WH * 0.08,
    marginTop: 36,
  },
  profileBoxBig: {
    height: WH * 0.4,
    marginTop: 24,
  },
});
