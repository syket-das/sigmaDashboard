import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { tokens } from '../../../theme';

const UniversityProfileApplicationProcess = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="application"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        Application Process
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          <ListItemButton
            alignItems="flex-start"
            style={{
              marginTop: '10px',
              maxHeight: '100px',
              overflow: 'auto',
            }}
          >
            <ListItemText primary="Syket Das shdjdk sd sd sd sd sd sd s sd sd sd sd sd sd sd sd sd sd " />
          </ListItemButton>
          <ListItemButton
            alignItems="flex-start"
            style={{
              marginTop: '10px',
              maxHeight: '100px',
              overflow: 'auto',
            }}
          >
            <ListItemText primary="Syket Das shdjdk sd sd sd sd sd sd s sd sd sd sd sd sd sd sd sd sd " />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default UniversityProfileApplicationProcess;
