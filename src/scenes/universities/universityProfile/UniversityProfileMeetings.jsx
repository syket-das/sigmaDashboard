import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { universityPrfileMeetings } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileMeetings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, meetings } = useSelector(
    (state) => state.universityProfile.meetings
  );

  useEffect(() => {
    if (error) {
      toast(error);
    }

    dispatch(universityPrfileMeetings(params.id));
  }, [dispatch, params.id, error]);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="400px"
      p="30px"
      overflow="auto"
      gridArea="meetings"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        color={colors.greenAccent[400]}
      >
        University Meetings
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {meetings?.map((meeting) => (
            <ListItemButton
            onClick={() => {
              window.location.replace('/meetings/'+meeting._id,);
            }}
              key={meeting._id}
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemText
                primary={meeting.title}
                secondary={
                  <>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mt="10px"
                    >
                      {meeting.agenda}
                      <Divider orientation="vertical" flexItem />
                      <Typography variant="body2" color="text.secondary">
                        {meeting.meetingTime}
                      </Typography>
                    </Box>
                  </>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UniversityProfileMeetings;
