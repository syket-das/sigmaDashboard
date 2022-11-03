import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react'
import TextRow from '../../../components/text/TextRow';
import { tokens } from '../../../theme';

const UniversityProfileContacts = () => {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  
    return (
      <Box
        backgroundColor={colors.primary[400]}
        height="400px"
        p="30px"
        overflow="auto"
        gridArea="contact"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          align="center"
          color={colors.greenAccent[400]}
        >
          Contact Person
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="10px"
        >
          <List sx={{ width: '100%', overflow: 'auto' }}>
            <ListItemButton
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Syket Das"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <TextRow>
                        <b>Email</b>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            mx: '10px',
                          }}
                        />

                        <Typography variant="h5">
                          saiketsd23@gmail.com
                        </Typography>
                      </TextRow>
                      <TextRow>
                        <b>Phone</b>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            mx: '10px',
                          }}
                        />

                        <Typography variant="h5">+91 8100156406</Typography>
                      </TextRow>
                      <TextRow>
                        <b>Description</b>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            mx: '10px',
                          }}
                        />

                        <Typography variant="h5">SEM Exchange Team</Typography>
                      </TextRow>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    );
}

export default UniversityProfileContacts