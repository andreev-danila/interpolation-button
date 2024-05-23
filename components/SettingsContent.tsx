import { WH } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

import { Box } from './Box';
import { Container } from './Container';
import { Typography } from './Typography';

const boxes = Array.from({ length: 4 }, (_, i) => i);

export function SettingsContent() {
  return (
    <Container>
      <Typography>Settings</Typography>
      {boxes.map((i) => {
        return <Box key={i} style={styles.settingsBox} />;
      })}
    </Container>
  );
}

const styles = StyleSheet.create({
  settingsBox: {
    height: WH * 0.1,
    marginTop: 12,
  },
});
