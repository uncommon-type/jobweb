import { createBrowserRouter, redirect } from 'react-router-dom';

import { Root } from './Root';
import { Error } from '@screens/common/Error/Error';
import { LoginSignup, action as loginAction, loader as loginLoader } from '@screens/loginSignup/LoginSignup';
import { action as signupAction } from '@screens/loginSignup/components/Signup/SignupForm';
import { Jobs, loader as jobsLoader } from '@screens/jobs/Jobs';
import { Job, loader as jobLoader } from '@screens/job/Job';
import { JobContent } from '@screens/job/components/JobContent';
import { RoleInfo } from '@screens/job/components/RoleInfo/RoleInfo';
import { CompanyInfo } from '@screens/job/components/CompanyInfo/CompanyInfo';
import { ActivityInfo } from '@screens/job/components/ActivityInfo';
import { OfferInfo } from '@screens/job/components/OfferInfo/OfferInfo';
import { AddJob, action as addJobAction } from '@screens/addJob/AddJob';
import { Activity, loader as activityLoader, action as activityAction } from '@screens/activity/Activity';
import { AddActivity, loader as addActivityLoader, action as addActivityAction } from '@screens/addActivity/AddActivity';

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
        action: addJobAction,
      },
      {
        path: 'jobs/:jobId/*',
        children: [
          {
            element: <Job />,
            loader: jobLoader,
            children: [
              { path: 'role', element: <RoleInfo /> },
              { path: 'company', element: <CompanyInfo /> },
              { path: 'activity', element: <ActivityInfo /> },
              { path: 'offer', element: <OfferInfo /> },
            ],
          },
          {
            path: '',
            element: <JobContent />,
            loader: jobLoader,

          },
          {
            path: 'activity/events/:activityId',
            element: <Activity />,
            loader: activityLoader,
            action: activityAction
          },
          {
            path: 'activity/tasks/:activityId',
            element: <Activity />,
            loader: activityLoader,
            action: activityAction
          },
          {
            path: 'activity/events/new',
            element: <AddActivity isEvent={true} />,
            loader: addActivityLoader,
            action: addActivityAction,
          },
          {
            path: 'activity/tasks/new',
            element: <AddActivity isEvent={false} />,
            loader: addActivityLoader,
            action: addActivityAction,
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
