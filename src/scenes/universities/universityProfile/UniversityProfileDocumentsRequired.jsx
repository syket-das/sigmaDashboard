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
import { universityProfileDocuments } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileDocumentsRequired = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, documents } = useSelector(
    (state) => state.universityProfile.documents
  );

  useEffect(() => {
    dispatch(universityProfileDocuments(params.id));
  }, [dispatch, params.id]);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');

  const handleClickOpen = (doc) => {
    setOpen(true);
    setTitle(doc.title);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('title', title);
  };

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
              onClick={() => handleClickOpen(doc)}
            >
              <ListItemText primary={doc.title} />
            </ListItemButton>
          ))}
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
              onClick={handleUpdate()}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default UniversityProfileDocumentsRequired;
