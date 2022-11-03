import { Update } from '@mui/icons-material';
import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import React from 'react'
import TextRow from '../../../components/text/TextRow';
import { tokens } from '../../../theme';

const UniversityProfileBasic = () => {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
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
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
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

          <Typography variant="h5">Uni Of California, Los Angeles</Typography>
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
  );
}

export default UniversityProfileBasic