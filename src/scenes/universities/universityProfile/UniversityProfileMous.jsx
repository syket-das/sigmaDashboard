import React, { useEffect } from 'react';
import {
  Autorenew,
  Download,
  LocalDiningSharp,
  UpdateSharp,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { tokens } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  universityProfileMOUS as uniMous,
  updateUniversityProfileMOUS,
} from '../../../redux/actions/university/universityProfileActions';
import { toast } from 'react-toastify';

const UniversityProfileMous = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, error, mous } = useSelector(
    (state) => state.universityProfile.mous
  );

  useEffect(() => {
    if (error) {
      toast(error);
    }

    dispatch(uniMous(params.id));
  }, [dispatch, params.id, error]);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [mouId, setMouId] = React.useState('');

  const handleClickOpen = (mou) => {
    setOpen(true);
    setTitle(mou.title);
    setType(mou.type);
    setStartDate(mou.startDate);
    setEndDate(mou.endDate);
    setMouId(mou._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);

    dispatch(updateUniversityProfileMOUS(mouId, formData));
    setOpen(false);
    setTimeout(() => {
      dispatch(uniMous(params.id));
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
          overflow="auto"
          height="400px"
          p="30px"
          gridArea="mou"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            MOU Contracts
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            overflow="auto"
            mt="10px"
          >
            {mous?.mous?.map((mou) => (
              <Card
                sx={{
                  display: 'flex',
                  width: '100%',
                  mt: '10px',
                }}
                key={mou?._id}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                  }}
                >
                  <CardContent sx={{ flex: '1 ' }}>
                    <Typography component="div" variant="h4" textAlign="center">
                      {mou?.title}
                    </Typography>
                    <Divider />
                    <Typography component="div" variant="h5">
                      Type : <b>{mou?.type}</b>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <b>Start Date</b> : {mou?.startDate}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <b>End Date</b> : {mou?.endDate}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="space-between"
                      m={'5px'}
                    >
                      <IconButton
                        aria-label="download"
                        color="secondary"
                        onClick={() => window.open(mou?.file.f_url)}
                      >
                        <Download />
                      </IconButton>

                      <IconButton
                        aria-label="update"
                        color="success"
                        onClick={() => handleClickOpen(mou)}
                      >
                        <UpdateSharp />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Box>

                <CardMedia component="div">
                  <iframe
                    src={` https://docs.google.com/gview?url=${mou?.file.f_url}&embedded=true#toolbar=0&navpanes=0&scrollbar=0`}
                    width="100%"
                    title="pdf"
                    frameborder="0"
                    style={{
                      overflow: 'hidden',
                    }}
                  ></iframe>
                </CardMedia>
              </Card>
            ))}
          </Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update University MOU Details</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To update the MOU details of the university, please enter the
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="type"
                  label="Type"
                  type="text"
                  fullWidth
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="startDate"
                  label="Start Date"
                  type="date"
                  fullWidth
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="endDate"
                  label="End Date"
                  type="date"
                  fullWidth
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
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
      )}
    </>
  );
};

export default UniversityProfileMous;
