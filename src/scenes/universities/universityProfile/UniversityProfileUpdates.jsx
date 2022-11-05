import { Box, Divider, List, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { universityProfileUpdates } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileUpdates = () => {
 
          const theme = useTheme();
          const colors = tokens(theme.palette.mode);
          const dispatch = useDispatch();
          const params = useParams();

          const {loading,error,updates} = useSelector(state => state.universityProfile.updates)

          useEffect(()=>{
            dispatch(universityProfileUpdates(params.id));
          },[ dispatch, params.id])
 
    return (
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
            {updates?.updates.map((update) => (
              <ListItemButton
                key={update._id}
                alignItems="flex-start"
                style={{
                  marginTop: '10px',
                  maxHeight: '100px',
                  overflow: 'auto',
                }}
              >
                <ListItemText
                  primary={update.createdAt}
                  secondary={
                    <React.Fragment>
                      {
                        update.value
                      }
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            ))}
            <Divider variant="inset" component="li" />
          </List>
        </Box>
      </Box>
    );
}

export default UniversityProfileUpdates