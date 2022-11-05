import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { universityProfileApplications } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileApplicationProcess = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, applicationProcess } = useSelector(
    (state) => state.universityProfile.applicationProcess
  );

  useEffect(() => {
    dispatch(universityProfileApplications(params.id));
  }, [dispatch, params.id]);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="application"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        Application Process
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {applicationProcess?.applications.map((process) => (
            <ListItemButton
              key={process._id}
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemText primary={process.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UniversityProfileApplicationProcess;
