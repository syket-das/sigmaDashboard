import { useEffect } from 'react';
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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokens } from '../../../theme';
import {
  universityProfileAggrements,
  updateUniversityProfileAggrements,
} from '../../../redux/actions/university/universityProfileActions';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UniversityProfileAgreements = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const { error, loading, aggrements } = useSelector(
    (state) => state.universityProfile.aggrements
  );

  useEffect(() => {
    if (error) {
      toast(error);
    }
    dispatch(universityProfileAggrements(params.id));
  }, [dispatch, params.id, error]);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [aggrementId, setAggrementId] = React.useState('');

  const handleClickOpen = (aggrement) => {
    setOpen(true);
    setTitle(aggrement.title);
    setAggrementId(aggrement._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('title', title);

    dispatch(updateUniversityProfileAggrements(aggrementId, formData));
    setTimeout(() => {
      dispatch(universityProfileAggrements(params.id));
    }, 1000);
  };

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
              onClick={() => handleClickOpen(aggrement)}
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
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update University Contact Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update the Contact details of the university, please enter the
              details here. If you don't want to update click cancel.
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

export default UniversityProfileAgreements;
