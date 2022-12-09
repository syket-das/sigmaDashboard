import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import {
  addUniversity,
  resetUniversity,
  universityList,
} from '../../redux/actions/university/universityActions';
import { toast } from 'react-toastify';
import HashLoaderComponent from '../../components/loader/HashLoaderComponent';
import { Link } from 'react-router-dom';
import InfoTooltip from '../../components/InfoTooltip';
import { AddCircle } from '@mui/icons-material';

const PartnerUniversities = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    loading,
    error,
    universities = {},
    newUniversity,
  } = useSelector((state) => state.universityList);

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [additionalInfo, setAdditionalInfo] = React.useState('');

  const handleClickOpen = (aggrement) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setOpen(false);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('website', website);
    formData.append('address', address);
    formData.append('additionalInfo', additionalInfo);

    dispatch(addUniversity(formData));
    dispatch(universityList());
    dispatch(resetUniversity());
    setName('');
    setCountry('');
    setCity('');
    setWebsite('');
    setAddress('');
    setAdditionalInfo('');
  };

  const { universities: universitityList = [] } = universities;

  useEffect(() => {
    if (error) {
      toast(error);
    }

    if (newUniversity) {
      toast('University added successfully');
      dispatch(universityList());
    }

    if (!error) {
      dispatch(universityList());
    }

    return () => {
      dispatch(resetUniversity());
    };
  }, [dispatch, error, newUniversity]);

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'website',
      headerName: 'Website',
      flex: 1,

      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'inherit' }}
        >
          {params.value}
        </a>
      ),
    },
    {
      field: 'info',
      headerName: 'Info',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <InfoTooltip
            createdBy={cellValue.row.createdBy}
            createdAt={cellValue.row.createdAt}
            updatedBy={cellValue.row.updatedBy}
            updatedAt={cellValue.row.updatedAt}
          />
        );
      },
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 1,
      renderCell: (cellValue) => {
        return (
          <Link to={`/partner-universities/${cellValue.row._id}`}>
            <Button variant="contained" color="primary">
              Browse
            </Button>
          </Link>
        );
      },
    },
  ];

  return (
    <>
      {loading ? (
        <HashLoaderComponent loading={loading} />
      ) : (
        <Box m="20px">
          <Header
            title="Partner Universities"
            subtitle="List of partner universities"
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
              position: 'relative',
              bottom: '-30px',
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
              }}
              endIcon={<AddCircle />}
              onClick={handleClickOpen}
            >
              Add New
            </Button>
          </Box>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              '& .MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: 'none',
              },
              '& .name-column--cell': {
                color: colors.greenAccent[300],
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: colors.blueAccent[700],
                borderBottom: 'none',
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400],
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: 'none',
                backgroundColor: colors.blueAccent[700],
              },
              '& .MuiCheckbox-root': {
                color: `${colors.greenAccent[200]} !important`,
              },
              '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              getRowId={(row) => row._id}
              rows={universitityList || []}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New University</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add university, please enter the details here. If you don't
                want to create click cancel.
              </DialogContentText>
              <form>
                <TextField
                  margin="dense"
                  id="name"
                  label="Enter University Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  margin="dense"
                  id="country"
                  label="Enter Country"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <TextField
                  margin="dense"
                  id="city"
                  label="Enter City"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  margin="dense"
                  id="address"
                  label="Enter Address"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  margin="dense"
                  id="website"
                  label="Enter Website"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <TextField
                  margin="dense"
                  id="additionalInfo"
                  label="Additional Info (optional)"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  sx={{
                    '& .MuiInputBase-input': {
                      height: '100px',
                    },
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
                onClick={handleCreate}
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

export default PartnerUniversities;
