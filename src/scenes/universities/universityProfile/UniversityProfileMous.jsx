import React, { useEffect } from 'react';
import { Download } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { tokens } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { universityProfileMOUS as uniMous } from '../../../redux/actions/university/universityProfileActions';

const UniversityProfileMous = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, error, mous } = useSelector(
    (state) => state.universityProfile.mous
  );

  useEffect(() => {
    
    dispatch(uniMous(params.id));
  }, [dispatch, params.id]);
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
            {mous?.mous.map((mou) => (
              <Card
                sx={{
                  display: 'flex',
                  width: '100%',
                  mt: '10px',
                }}
                key={mou._id}
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
                      {mou.title}
                    </Typography>
                    <Divider />
                    <Typography component="div" variant="h5">
                      Type : <b>{mou.type}</b>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <b>Start Date</b> : {mou.startDate}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <b>End Date</b> : {mou.endDate}
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[700],
                        mt: '10px',
                      }}
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => window.open(mou.file.f_url)}
                    >
                      <Download sx={{ mr: '10px' }} />
                      Download
                    </Button>
                  </CardContent>
                </Box>

                <CardMedia component="div">
                  <iframe
                    src={` https://docs.google.com/gview?url=${mou.file.f_url}&embedded=true#toolbar=0&navpanes=0&scrollbar=0`}
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
        </Box>
      )}
    </>
  );
};

export default UniversityProfileMous;
