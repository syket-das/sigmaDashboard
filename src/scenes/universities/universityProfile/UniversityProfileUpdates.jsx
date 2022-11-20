import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
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
import InfoTooltip from '../../../components/InfoTooltip';
import {
  universityProfileUpdates,
  updateUniversityProfileUpdates,
} from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileUpdates = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, updates } = useSelector(
    (state) => state.universityProfile.updates
  );

  useEffect(() => {
    dispatch(universityProfileUpdates(params.id));
  }, [dispatch, params.id]);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [updateId, setUpdateId] = React.useState('');

  const handleClickOpen = (update) => {
    setOpen(true);
    setValue(update.value);
    setUpdateId(update._id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('value', value);

    dispatch(updateUniversityProfileUpdates(updateId, formData));

    setTimeout(() => {
      dispatch(universityProfileUpdates(params.id));
    }, 1000);
  };

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
              onClick={() => handleClickOpen(update)}
            >
              <ListItemText
                primary={
                  <>
                    {' '}
                    <InfoTooltip
                      createdBy={update?.createdBy}
                      createdAt={update?.createdAt}
                      updatedBy={update?.updatedBy}
                      updatedAt={update?.updatedAt}
                    />
                    {update.type}
                  </>
                }
                secondary={<React.Fragment> {update.value}</React.Fragment>}
              />
            </ListItemButton>
          ))}
          <Divider variant="inset" component="li" />
        </List>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update University Document Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update the document details of the university, please enter the
              details here. If you don't want to update click cancel.
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                margin="dense"
                id="value"
                label="Value"
                type="text"
                fullWidth
                variant="standard"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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

export default UniversityProfileUpdates;
