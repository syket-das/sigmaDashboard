import { Box, Divider, List, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';

const UniversityProfileUpdates = () => {
 
          const theme = useTheme();
          const colors = tokens(theme.palette.mode);
 
    return (
      <Box
        backgroundColor={colors.primary[400]}
        // height="400px"
        p="30px"
        overflow="auto"
        gridArea="updates"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          align="center"
          color={colors.greenAccent[400]}
        >
          Recent Updates
        </Typography>
        <Box mt="10px">
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
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    {
                      "I'll be in your neighborhood doing errands this…bdfx bdf df b dgh hf dh fh dfh hdf hf dfh hdf dhf xdhd xghgf  fgxfxhf gxhf xfh h g dyrh  hry dhry dhyr dhry dhry dryh ydhr rdrhy rdhy drhy"
                    }
                  </React.Fragment>
                }
              />
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </List>
        </Box>
      </Box>
    );
}

export default UniversityProfileUpdates