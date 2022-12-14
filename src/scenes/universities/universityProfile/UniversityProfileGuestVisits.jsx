import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { tokens } from '../../../theme';

const UniversityProfileGuestVisits = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="guestVisit"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        University Guest Visits
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
            <ListItemText
              primary="Visit Title"
              secondary={
                <>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="10px"
                  >
                    Host
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="body2" color="text.secondary">
                      Date
                    </Typography>
                  </Box>
                </>
              }
            />
          </ListItemButton>
          <ListItemButton
            alignItems="flex-start"
            style={{
              marginTop: '10px',
              maxHeight: '100px',
              overflow: 'auto',
            }}
          ></ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default UniversityProfileGuestVisits;
