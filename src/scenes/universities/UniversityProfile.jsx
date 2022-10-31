import { Download, More, Update } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import TextRow from '../../components/text/TextRow';
import { tokens } from '../../theme';

const UniversityProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="University Profile"
          subtitle="Manage university information "
        />
      </Box>

      <Box
        display="grid"
        gap="20px"
        gridTemplateAreas={`
          'basic mou  updates'
          'contact financial updates'
          
        `}
      >
        <Box
          backgroundColor={colors.primary[400]}
          height="400px"
          p="30px"
          overflow="auto"
          gridArea="basic"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            Basic Details
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Name</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                Uni Of California, Los Angeles
              </Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Country</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">America</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '100px',
                }}
              >
                <b>City</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">Los Angeles, California</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Address</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                1234, Westwood Blvd, Los Angeles, CA 90095
              </Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Website</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">https://www.ucla.edu/</Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Created At</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">20-10-2022</Typography>
            </TextRow>
          </Box>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              mt: '30px',
            }}
          >
            <Update sx={{ mr: '10px' }} />
            Update Details
          </Button>
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="400px"
          p="30px"
          gridArea="mou"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            MOU Contracts
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            overflow="auto"
            mt="10px"
          >
            <Card
              sx={{
                display: 'flex',
                width: '100%',
                mt: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '80%',
                }}
              >
                <CardContent sx={{ flex: '1 ' }}>
                  <Typography component="div" variant="h5">
                    <b>General</b>
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    <b>Start Date</b> : 20-10-2022
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    <b>End Date</b> : 20-10-2022
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: colors.greenAccent[700],
                      mt: '10px',
                    }}
                    variant="contained"
                    color="success"
                    size="small"
                  >
                    <Download sx={{ mr: '10px' }} />
                    Download
                  </Button>
                </CardContent>
              </Box>

              <CardMedia component="ifreame">
                <iframe
                  src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  width="100%"
                  title="pdf"
                  style={{
                    overflow: 'hidden',
                  }}
                ></iframe>
              </CardMedia>
            </Card>
          </Box>
        </Box>
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

                          <Typography variant="h5">
                            SEM Exchange Team
                          </Typography>
                        </TextRow>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </List>
          </Box>
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          height="400px"
          p="30px"
          overflow="auto"
          gridArea="financial"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            Financial Agreements
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
      </Box>
    </Box>
  );
};

export default UniversityProfile;

// random pdf link
// https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf

// avatar url link
// https://www.w3schools.com/howto/img_avatar.png
