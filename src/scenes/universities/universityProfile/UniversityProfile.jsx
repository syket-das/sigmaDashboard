import { Box } from '@mui/material';
import React from 'react';
import Header from '../../../components/Header';
import UniversityProfileAgreements from './UniversityProfileAgreements';
import UniversityProfileApplicationProcess from './UniversityProfileApplicationProcess';
import UniversityProfileBasic from './UniversityProfileBasic';
import UniversityProfileContacts from './UniversityProfileContacts';
import UniversityProfileDocumentsRequired from './UniversityProfileDocumentsRequired';
import UniversityProfileFacultyMobility from './UniversityProfileFacultyMobility';
import UniversityProfileGuestVisits from './UniversityProfileGuestVisits';
import UniversityProfileMeetings from './UniversityProfileMeetings';
import UniversityProfileMous from './UniversityProfileMous';
import UniversityProfilePrograms from './UniversityProfilePrograms';
import UniversityProfileUpdates from './UniversityProfileUpdates';

const UniversityProfile = () => {
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
          'guestVisit guestVisit meetings'
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
        <UniversityProfileGuestVisits />
        <UniversityProfileMeetings />
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
