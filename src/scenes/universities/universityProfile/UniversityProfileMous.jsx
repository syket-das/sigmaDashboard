import { Download } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';

const UniversityProfileMous = () => {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
  return (
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

          <CardMedia component="iframe">
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
  );
}

export default UniversityProfileMous