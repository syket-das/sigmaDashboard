import { Download, More, Update } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import Header from '../../../components/Header';
import TextRow from '../../../components/text/TextRow';
import { tokens } from '../../../theme';
import UniversityPrograms from '../UniversityPrograms';
import UniversityProfileAgreements from './UniversityProfileAgreements';
import UniversityProfileApplicationProcess from './UniversityProfileApplicationProcess';
import UniversityProfileBasic from './UniversityProfileBasic';
import UniversityProfileContacts from './UniversityProfileContacts';
import UniversityProfileDocumentsRequired from './UniversityProfileDocumentsRequired';
import UniversityProfileFacultyMobility from './UniversityProfileFacultyMobility';
import UniversityProfileMous from './UniversityProfileMous';
import UniversityProfilePrograms from './UniversityProfilePrograms';
import UniversityProfileUpdates from './UniversityProfileUpdates';

const UniversityProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="University Profile"
          subtitle="Manage university information "
        />
      </Box>

      <Box
        display="grid"
        gap="20px"
        gridTemplateAreas={`
          'basic mou  updates'
          'contact financial updates'
          'document application updates'
          'faculty programs programs'
          
        `}
      >
        <UniversityProfileBasic />
        <UniversityProfileMous />

        <UniversityProfileContacts />
        <UniversityProfileAgreements />

        <UniversityProfileUpdates />
      <UniversityProfileDocumentsRequired />
     <UniversityProfileApplicationProcess />
      <UniversityProfileFacultyMobility />
        <UniversityProfilePrograms />
      </Box>
    </Box>
  );
};

export default UniversityProfile;

// random pdf link
// https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf

// avatar url link
// https://www.w3schools.com/howto/img_avatar.png
