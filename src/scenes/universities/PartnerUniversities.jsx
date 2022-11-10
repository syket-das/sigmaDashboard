import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import { universityList } from '../../redux/actions/university/universityActions';
import { toast } from 'react-toastify';
import HashLoaderComponent from '../../components/loader/HashLoaderComponent';
import { Link } from 'react-router-dom';

const PartnerUniversities = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { loading, error, universities } = useSelector(
    (state) => state.universityList
  );

  const { universities: universitityList = [] } = universities;

  useEffect(() => {
    if (error) {
      toast(error);
    }

    dispatch(universityList());
  }, [dispatch, error]);

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
        </Box>
      )}
    </>
  );
};

export default PartnerUniversities;
