import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { meetingDetails } from '../../../redux/actions/meeting/meetingActions';
import { Box, Stack } from '@mui/system';
import Header from '../../../components/Header';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../../theme';
import { Download, Image } from '@mui/icons-material';
const MeetingProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();
  const { meeting, loading, error } = useSelector(
    (state) => state.meetingDetails
  );




  useEffect(() => {
    dispatch(meetingDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Meeting Profile"
          subtitle="Manage Meeting information "
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box>
          Title : {meeting?.meeting?.title}
          <hr />
          Meeting Date : {meeting?.meeting?.meetingTime}
          <hr />
          Agenda : {meeting?.meeting?.agenda}
          <hr />
          University : {meeting?.meeting?.university || 'N/A'}
        </Box>
        <Box>
            <Typography variant="h5" sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: 'center',
              }}>Participants</Typography>

    
        </Box>
      </Box>
      <hr />
        <Box>
          <Box
            // backgroundColor={colors.primary[400]}
            overflow="auto"
            p="30px"
          >
              <Typography variant="h5" sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: 'center',
              }}>Meeting Files</Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              overflow="auto"
              justifyContent="space-between"
              mx={10}

            >
              {meeting?.meeting?.files?.map((attachment) => (
                <div key={attachment._id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <img src={attachment.f_url} alt={attachment.f_key}
                  style={{width: '100px', height: '100px', marginBottom: '10px'}}
                  />
                  <a href={attachment
                    .f_url} download={attachment.url}>

                    <IconButton>
                      <Download />
                    </IconButton>
                  </a>

                </div>
              ))}
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default MeetingProfile;
