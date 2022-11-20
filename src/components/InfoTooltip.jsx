import {
  Divider,
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
} from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});



const InfoTooltip = ({ createdBy, createdAt, updatedBy, updatedAt }) => {
  const title = () => {
    return (
      <Box>
        <p>
          <b
            style={{
              color: 'lightgreen',
            }}
          >
            {' '}
            Created by:{' '}
          </b>
          <b>{createdBy?.name}</b> on{' '}
          <b
            style={{
              color: 'lightgreen',
            }}
          >
            {String(createdAt).substring(0, 10)}
          </b>
        </p>

        <Divider />
        {updatedBy && (
          <p>
            <b
              style={{
                color: 'lightBlue',
              }}
            >
              {' '}
              Last updated by:{' '}
            </b>
            <b>{updatedBy?.name}</b> on{' '}
            <b
              style={{
                color: 'lightBlue',
              }}
            >
              {String(updatedAt).substring(0, 10)}
            </b>
          </p>
        )}
      </Box>
    );
  };

  return (
    <CustomWidthTooltip title={title()} arrow>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </CustomWidthTooltip>
  );
};

export default InfoTooltip;
