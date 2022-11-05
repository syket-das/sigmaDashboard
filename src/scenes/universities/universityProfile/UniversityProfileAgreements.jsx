import {useEffect}  from 'react';
import { Box, List, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tokens } from '../../../theme';
import { universityProfileAggrements } from '../../../redux/actions/university/universityProfileActions';
import { useParams } from 'react-router-dom';

const UniversityProfileAgreements = () => {
         const theme = useTheme();
         const colors = tokens(theme.palette.mode);
         const dispatch = useDispatch();
         const params = useParams();

         const { error, loading, aggrements } = useSelector(
           (state) => state.universityProfile.aggrements
         );

         useEffect(() => {
          dispatch(universityProfileAggrements(params.id));
         },[ dispatch, params.id]);
  return (
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
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {aggrements?.finincialAggrements.map((aggrement) => (
            <ListItemButton
              key={aggrement?._id}
              alignItems="flex-start"
              style={{
                marginTop: '20px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemText primary={aggrement?.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default UniversityProfileAgreements