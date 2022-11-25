import { Update } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InfoTooltip from '../../../components/InfoTooltip';
import TextRow from '../../../components/text/TextRow';
import {
  universityProfileBasic,
  updateUniversityProfileBasic,
} from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileBasic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, error, university } = useSelector(
    (state) => state.universityProfile.basic
  );
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(universityProfileBasic(params.id));
  }, [dispatch, params.id]);

  const [name, setName] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [website, setWebsite] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);

    setName(university?.university?.name);
    setCountry(university?.university?.country);
    setCity(university?.university?.city);
    setAddress(university?.university?.address);
    setWebsite(university?.university?.website);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('website', website);

    dispatch(updateUniversityProfileBasic(params.id, formData));
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
          gridArea="basic"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            color={colors.greenAccent[400]}
          >
            Basic Details
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Name</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university?.name}
              </Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Country</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university.country}
              </Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '100px',
                }}
              >
                <b>City</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university.city}
              </Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Address</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university.address}
              </Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Website</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university.website}
              </Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Created At</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">
                {university?.university.createdAt}
              </Typography>
            </TextRow>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <InfoTooltip
              createdBy={university?.university.createdBy?.name}
              createdAt={university?.university?.createdAt}
              updatedBy={university?.university.updatedBy?.name}
              updatedAt={university?.university?.updatedAt}
            />
            <Button
              sx={{
                backgroundColor: colors.greenAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
                mt: '30px',
              }}
              onClick={handleClickOpen}
            >
              <Update sx={{ mr: '10px' }} />
              Update Details
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            style={
              {
                // backgroundColor: colors.primary[400],
                // opacity: '0.3',
              }
            }
          >
            <DialogTitle>Update University Basic Details</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To update the basic details of the university, please enter the
                details here. If you don't want to update click cancel.
              </DialogContentText>
              <form>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="country"
                  label="Country"
                  type="text"
                  fullWidth
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  fullWidth
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  fullWidth
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="website"
                  label="Website"
                  type="text"
                  fullWidth
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
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

export default UniversityProfileBasic;
