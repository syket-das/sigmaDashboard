import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/actions/userActions';
import { toast } from 'react-toastify';
import HashLoaderComponent from '../../components/loader/HashLoaderComponent';
const Login = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const notify = () => toast(error);
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(login(values.email, values.password));
  };

  return (
    <>
      {error && notify()}
      {loading ? (
        <HashLoaderComponent loading={loading} />
      ) : (
        <Box
          m="20px"
          style={{
            textAlign: 'center',
          }}
        >
          <Header title="SIGMA DASHBOARD" subtitle="Login to sigma dashboard" />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                    '& > *': {
                      maxWidth: '400px',
                    },
                  }}
                >
                  <Card sx={{ maxWidth: 400, maxHeight: 350 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random/?university"
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Card>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />

                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                  >
                    Login
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      )}
      <Box
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: '20px',
        }}
      >
        <Typography
          sx={{
            mx: '10px',
          }}
        >
          Developed By
        </Typography>
        <a
          style={{
            textDecoration: 'dashed',
            color: 'lightgreen',
            cursor: 'revert',
          }}
          href="http://syket-das.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Syket Das
        </a>
      </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});
const initialValues = {
  email: '',
  password: '',
};

export default Login;

// random img url  https://source.unsplash.com/random
