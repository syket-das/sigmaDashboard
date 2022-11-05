import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextRow from '../../../components/text/TextRow';
import { universityProfileContacts } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileContacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, contacts } = useSelector(
    (state) => state.universityProfile.contacts
  );

  useEffect(() => {
    dispatch(universityProfileContacts(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box
          backgroundColor={colors.primary[400]}
          height="400px"
          p="30px"
          overflow="auto"
          gridArea="contact"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            Contact Person
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <List sx={{ width: '100%', overflow: 'auto' }}>
              {contacts?.contacts.map((contact) => (
                <ListItemButton
                  key={contact._id}
                  alignItems="flex-start"
                  style={{
                    marginTop: '20px',
                    // maxHeight: '100px',
                    overflow: 'auto',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.w3schools.com/howto/img_avatar.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          <TextRow>
                            <b>Email</b>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                mx: '10px',
                              }}
                            />

                            <Typography variant="h5">
                              {contact.email}
                            </Typography>
                          </TextRow>
                          <TextRow>
                            <b>Phone</b>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                mx: '10px',
                              }}
                            />

                            <Typography variant="h5">
                              {contact.phone}
                            </Typography>
                          </TextRow>
                          <TextRow>
                            <b>Designation</b>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                mx: '10px',
                              }}
                            />

                            <Typography variant="h5">
                              {contact.description}
                            </Typography>
                          </TextRow>
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <Divider />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UniversityProfileContacts;
