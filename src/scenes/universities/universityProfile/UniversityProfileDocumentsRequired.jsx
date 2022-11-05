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
import { universityProfileDocuments } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileDocumentsRequired = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const {loading,error, documents} = useSelector(state => state.universityProfile.documents)

  useEffect(() => {
    dispatch(universityProfileDocuments(params.id));
  }, [dispatch, params.id]);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="document"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        Documents Required
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {documents?.documents.map((doc) => (
            <ListItemButton
              key={doc._id}
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemText primary={doc.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UniversityProfileDocumentsRequired;
