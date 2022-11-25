import { Box, Button, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import InfoTooltip from '../../components/InfoTooltip';
import HashLoaderComponent from '../../components/loader/HashLoaderComponent';
import { meetingList } from '../../redux/actions/meeting/meetingActions';
import { tokens } from '../../theme';

const Meetings = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { meetings, loading, error } = useSelector(
    (state) => state.meetingList
  );

  useEffect(() => {
    dispatch(meetingList());
  }, [dispatch]);

  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'meetingTime',
      headerName: 'Meeting Time',
      flex: 1,
    },
    {
      field: 'agenda',
      headerName: 'Agenda',
      flex: 1,
    },
    {
      field: `${'university'}`,
      headerName: 'University / Internal',
      flex: 1,

      renderCell: (cellValue) => {
        return (
          <span className="">
            {cellValue.row.university ? 'University' : 'Internal'}
          </span>
        );
      },
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 1,
      renderCell: (cellValue) => {
        return (
          <Link to={`/meetings/${cellValue.row._id}`}>
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
          <Header title="Meetings" subtitle="List of all meetings" />
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
              rows={meetings || []}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Meetings;
