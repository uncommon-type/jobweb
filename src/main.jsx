import { createBrowserRouter, redirect } from 'react-router-dom';

import { Root } from './Root';
import { Error } from '@screens/common/Error/Error';
import {
  LoginSignup, action as loginAction,
  loader as loginLoader,
} from '@screens/loginSignup/LoginSignup';
import { action as signupAction } from '@screens/loginSignup/components/Signup/SignupForm';
import { Jobs, loader as jobsLoader } from '@screens/jobs/Jobs';
import { Job } from '@screens/job/Job';
import { JobContent } from '@screens/job/components/JobContent';
import { RoleInfo } from '@screens/job/components/RoleInfo/RoleInfo';
import { CompanyInfo } from '@screens/job/components/CompanyInfo/CompanyInfo';
import { ActivityInfo } from '@screens/job/components/ActivityInfo';
import { OfferInfo } from '@screens/job/components/OfferInfo/OfferInfo';
import { AddJob } from '@screens/addJob/AddJob';
import { Activity } from '@screens/activity/Activity';
import { AddActivity } from '@screens/addActivity/AddActivity';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LoginSignup />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: 'signup',
        element: <LoginSignup isGuest={true} />,
        action: signupAction,
      },
      {
        path: 'jobs',
        element: <Jobs />,
        loader: jobsLoader,
      },
      {
        path: 'jobs/new',
        element: <AddJob />,
      },
      {
        path: 'jobs/:jobId/*',
        children: [
          {
            element: <Job />,
            children: [
              { path: 'role', element: <RoleInfo /> },
              { path: 'company', element: <CompanyInfo /> },
              { path: 'activity', element: <ActivityInfo /> },
              { path: 'offer', element: <OfferInfo /> },
              { path: '*', element: <JobContent /> },
            ],
          },
          {
            path: 'activity/events/:activityId',
            element: <Activity />,
          },
          {
            path: 'activity/tasks/:activityId',
            element: <Activity />,
          },

          {
            path: 'activity/events/new',
            element: <AddActivity isEvent={true} />,
          },
          {
            path: 'activity/tasks/new',
            element: <AddActivity isEvent={false} />,
          },
        ],
      },
    ],
  },
  {
    path: '/logout',
    action: () => {
      localStorage.removeItem('token');
      return redirect('/');
    },
  },
];

export const router = createBrowserRouter(routes);
