import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{}}>
      <Divider />
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mr: '10px',
          }}
        >
          Developed By{' '}
        </Typography>
        <a
          style={{
            textDecoration: 'none',
            color: 'lightgreen',
            fontWeight: 'bold',
          }}
          href="http://syket-das.me"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Typography variant="h5">Syket Das</Typography>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
