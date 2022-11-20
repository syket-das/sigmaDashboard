import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  universityProfilePrograms,
  updateUniversityProfilePrograms,
} from '../../redux/actions/university/universityProfileActions';
import InfoTooltip from '../../components/InfoTooltip';

const UniversityPrograms = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const params = useParams();
  const colors = tokens(theme.palette.mode);
  const { loading, error, programs } = useSelector(
    (state) => state.universityProfile.programs
  );

  useEffect(() => {
    if (error) {
      toast(error);
    }

    dispatch(universityProfilePrograms(params.id));
  }, [dispatch, error, params.id]);

  const columns = [
    {
      field: 'lpu_name',
      headerName: 'Lpu Degree',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'forign_name',
      headerName: 'Forign Degree',
      flex: 1,
    },
    {
      field: 'tutionFees',
      headerName: 'Tution Fees',
      flex: 1,
    },
    {
      field: 'scholarship',
      headerName: 'Scholarship',
      flex: 1,
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
      field: 'update',
      headerName: 'Update',
      flex: 1,
      renderCell: (cellValue) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickOpen(cellValue.row)}
          >
            Update
          </Button>
        );
      },
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [lpuName, setLpuName] = React.useState('');
  const [foriegnName, setForiegnName] = React.useState('');
  const [tutionFees, setTutionFees] = React.useState('');
  const [scholarship, setScholarship] = React.useState('');
  const [programId, setProgramId] = React.useState('');

  const handleClickOpen = (program) => {
    setOpen(true);
    setLpuName(program.lpu_name);
    setForiegnName(program.forign_name);
    setTutionFees(program.tutionFees);
    setScholarship(program.scholarship);
    setProgramId(program._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('lpu_name', lpuName);
    formData.append('forign_name', foriegnName);
    formData.append('tutionFees', tutionFees);
    formData.append('scholarship', scholarship);

    dispatch(updateUniversityProfilePrograms(programId, formData));

    setTimeout(() => {
      dispatch(universityProfilePrograms(params.id));
    }, 1000);
  };

  return (
    <div>
      {loading ? (
        <Box
          m="20px"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Box m="20px" width={'100%'}>
          <Box
            m="40px 0 0 0"
            height="400px"
            width="100%"
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
              style={{
                minWidth: '100%',
              }}
              getRowId={(row) => row._id}
              rows={programs?.programs || []}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
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
                  id="lpuNmae"
                  label="Lpu Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={lpuName}
                  onChange={(e) => setLpuName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="foriegnName"
                  label="Foriegn Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={foriegnName}
                  onChange={(e) => setForiegnName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="tutionFees"
                  label="Tution Fees"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={tutionFees}
                  onChange={(e) => setTutionFees(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="scholarship"
                  label="Scholarship"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={scholarship}
                  onChange={(e) => setScholarship(e.target.value)}
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
    </div>
  );
};

export default UniversityPrograms;
