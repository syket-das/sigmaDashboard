import { Update } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HashLoaderComponent from '../../../components/loader/HashLoaderComponent';
import TextRow from '../../../components/text/TextRow';
import { universityProfileBasic } from '../../../redux/actions/university/universityProfileActions';
import { tokens } from '../../../theme';

const UniversityProfileBasic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, error, university } = useSelector(
    (state) => state.universityProfile.basic
  );

  useEffect(() => {
    dispatch(universityProfileBasic(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
                {university?.university.name}
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
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              mt: '30px',
            }}
          >
            <Update sx={{ mr: '10px' }} />
            Update Details
          </Button>
        </Box>
      )}
    </>
  );
};

export default UniversityProfileBasic;
