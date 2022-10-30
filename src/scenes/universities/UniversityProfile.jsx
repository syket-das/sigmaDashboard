import { Download, Update } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
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
      {/* Row - 1 */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          gridAutoRows="140px"
          height="400px"
          p="30px"
          overflow="auto"
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
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="400px"
          p="30px"
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

              <CardMedia
                component="ifreame"
                sx={{
                  // width: 151,
                  height: 151,
                }}
              >
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
      </Box>
    </Box>
  );
};

export default UniversityProfile;

// random pdf link
// https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
