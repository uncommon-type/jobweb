import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginSignup } from '@screens/loginSignup/LoginSignup';
import { Jobs } from '@screens/jobs/Jobs';
import { AddJob } from '@screens/addJob/AddJob';
import { Job } from '@screens/job/Job';
import { NotFound } from '@screens/notFound/NotFound';

const Root = () => {
  return (
    <Router>
      <div className="wrapper decor">
        <span className="pin"></span>
        <Routes>
          <Route index element={<LoginSignup />} />
          <Route path="signup" element={<LoginSignup isGuest={true} />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobId/*" element={<Job />} />
          <Route path="jobs/new" element={<AddJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />);
