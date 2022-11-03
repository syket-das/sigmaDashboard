import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import UniversityPrograms from '../UniversityPrograms';

const UniversityProfilePrograms = () => {
 
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
 
    return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="programs"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        University Programs
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        // alignItems="center"
        mt="10px"
      >
        <UniversityPrograms />
      </Box>
    </Box>
  );
}

export default UniversityProfilePrograms