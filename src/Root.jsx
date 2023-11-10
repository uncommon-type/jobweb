import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router, Routes, Route, useLocation,
  Navigate,
} from 'react-router-dom';

import { AuthProvider } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';

import { LoginSignup } from '@screens/loginSignup/LoginSignup';
import { Jobs } from '@screens/jobs/Jobs';
import { AddJob } from '@screens/addJob/AddJob';
import { Job } from '@screens/job/Job';
import { NotFound } from '@screens/notFound/NotFound';

const RequireAuth = ({ children }) => {
  const { authed } = useAuth();
  const location = useLocation();

  if (authed) {
    return children;
  }

  return <Navigate to="/" replace state={{ path: location.pathname }} />;
};

const Root = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="wrapper decor">
          <span className="pin"></span>
          <Routes>
            <Route index element={<LoginSignup />} />
            <Route path="signup" element={<LoginSignup isGuest={true} />} />
            <Route path="jobs" element={
              <RequireAuth>
                <Jobs />
              </RequireAuth>
            } />
            <Route path="jobs/:jobId/*" element={
              <RequireAuth>
                <Job />
              </RequireAuth>
            } />
            <Route path="jobs/new" element={
              <RequireAuth>
                <AddJob />
              </RequireAuth>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />);
