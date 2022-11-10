import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextRow from '../../../components/text/TextRow';
import {
  universityProfileContacts,
  updateUniversityProfileContacts,
} from '../../../redux/actions/university/universityProfileActions';
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

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [contactId, setContactId] = React.useState('');

  const handleClickOpen = (contact) => {
    setOpen(true);
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setDesignation(contact.description);
    setContactId(contact._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('description', designation);

    dispatch(updateUniversityProfileContacts(contactId, formData));

    setTimeout(() => {
      dispatch(universityProfileContacts(params.id));
    }, 1000);
  };

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
                  onClick={() => handleClickOpen(contact)}
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
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Update University Contact Details</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To update the Contact details of the university, please enter
                  the details here. If you don't want to update click cancel.
                </DialogContentText>
                <form>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <TextField
                    margin="dense"
                    id="designation"
                    label="Designation"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </form>
              </DialogContent>
              <DialogActions>
                <Button
                  sx={{
                    backgroundColor: colors.redAccent[700],
                    color: colors.grey[100],
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    mt: '30px',
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>

                <Button
                  sx={{
                    backgroundColor: colors.greenAccent[700],
                    color: colors.grey[100],
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    mt: '30px',
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UniversityProfileContacts;
