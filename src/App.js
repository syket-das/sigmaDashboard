import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import { Login, Register } from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Calendar from './scenes/calendar/calendar';
import { ProtectedRoute } from './routes/ProtectedRoute';
import PartnerUniversities from './scenes/universities/PartnerUniversities';
import UniversityProfile from './scenes/universities/universityProfile/UniversityProfile';
import Footer from './scenes/global/Footer';
import Meetings from './scenes/meetings/Meetings';
import MeetingProfile from './scenes/meetings/meetingProfile/MeetingProfile';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const { userInfo: user } = useSelector((state) => state.userLogin);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {user && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route
                path="/"
                exact
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/form" element={<Register />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              {/* protected - university */}
              <Route
                path="/partner-universities"
                element={
                  <ProtectedRoute>
                    <PartnerUniversities />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/partner-universities/:id"
                element={
                  <ProtectedRoute>
                    <UniversityProfile />
                  </ProtectedRoute>
                }
              />

              {/* Partner Universities */}

              {/* Meetings */}
              <Route
                path="/meetings"
                element={
                  <ProtectedRoute>
                    <Meetings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/meetings/:id"
                element={
                  <ProtectedRoute>
                    <MeetingProfile />
                  </ProtectedRoute>
                }
              />
            </Routes>
            {user && <Footer setIsSidebar={setIsSidebar} />}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
