import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  universityProfileApplications,
  updateUniversityProfileApplications,
} from '../../../redux/actions/university/universityProfileActions';
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

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [applicationId, setApplicationId] = React.useState('');

  const handleClickOpen = (process) => {
    setOpen(true);
    setTitle(process.title);
    setApplicationId(process._id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('title', title);

    dispatch(updateUniversityProfileApplications(applicationId, formData));

    setTimeout(() => {
      dispatch(universityProfileApplications(params.id));
    }, 1000);
  };

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
              onClick={() => handleClickOpen(process)}
            >
              <ListItemText primary={process.title} />
            </ListItemButton>
          ))}
        </List>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Update University Application process Details
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update the Application process details of the university,
              please enter the details here. If you don't want to update click
              cancel.
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
  );
};

export default UniversityProfileApplicationProcess;
