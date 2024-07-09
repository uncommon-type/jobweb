import { createBrowserRouter, redirect } from 'react-router-dom';

import { Root } from './Root';
import { Error } from '@screens/common/Error/Error';
import { LoginSignup, action as loginAction, loader as loginLoader } from '@screens/loginSignup/LoginSignup';
import { action as signupAction } from '@screens/loginSignup/components/Signup/SignupForm';
import { Jobs, loader as jobsLoader, action as destroyAction } from '@screens/jobs/Jobs';
import { Job, loader as jobLoader } from '@screens/job/Job';
import { JobContent } from '@screens/job/components/JobContent';
import { RoleInfo } from '@screens/job/components/RoleInfo/RoleInfo';
import { CompanyInfo } from '@screens/job/components/CompanyInfo/CompanyInfo';
import { ActivityInfo, action as modifyActivityInfoAction } from '@screens/job/components/ActivityInfo';
import { OfferInfo } from '@screens/job/components/OfferInfo/OfferInfo';
import { AddJob, action as addJobAction } from '@screens/addJob/AddJob';
import { Activity, action as activityAction } from '@screens/activity/Activity';
import { AddActivity, action as addActivityAction } from '@screens/addActivity/AddActivity';
import { NotFound } from '@screens/notFound/NotFound';

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
        action: destroyAction,
      },
      {
        path: 'jobs/new',
        element: <AddJob />,
        action: addJobAction,
      },
      {
        path: 'jobs/:jobId/*',
        element: <Job />,
        loader: jobLoader,
        id: 'job',
        children: [
          {
            element: <JobContent />,
            children: [
              { path: 'role', element: <RoleInfo /> },
              { path: 'company', element: <CompanyInfo /> },
              {
                path: 'activity', element: <ActivityInfo />,
                action: modifyActivityInfoAction 
              },
              { path: 'offer', element: <OfferInfo /> }
            ],
          },
          {
            path: 'activity/events/:activityId',
            element: <Activity />,
            action: activityAction
          },
          {
            path: 'activity/tasks/:activityId',
            element: <Activity />,
            action: activityAction 
          },
          {
            path: 'activity/events/new',
            element: <AddActivity isEvent={true} />,
            action: addActivityAction,
          },
          {
            path: 'activity/tasks/new',
            element: <AddActivity isEvent={false} />,
            action: addActivityAction,
          },
          { path: '*', element: <NotFound /> },
        ],
      },
      { path: '*', element: <NotFound /> },
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
