import { createBrowserRouter, Outlet, redirect } from 'react-router-dom';

import { Root } from './Root';
import { Error } from '@screens/common/Error/Error';
import { LoginSignup, action as loginAction, loader as loginLoader } from '@screens/loginSignup/LoginSignup';
import { action as signupAction } from '@screens/loginSignup/components/Signup/SignupForm';
import { Jobs, loader as jobsLoader, action as destroyAction } from '@screens/jobs/Jobs';
import { Job, loader as jobLoader, action as updateJobAction } from '@screens/job/Job';
import { JobItem } from '@screens/job/components/JobItem';
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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Jobs />,
            loader: jobsLoader,
            action: destroyAction,
          },
          {
            path: 'new',
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: ':jobId/*',
            element: <Job />,
            loader: jobLoader,
            action: updateJobAction,
            children: [
              {
                element: <JobItem />,
                children: [
                  {
                    index: true,
                    element: <RoleInfo />,
                  },
                  {
                    path: 'role',
                    element: <RoleInfo />,
                  },
                  { path: 'company',
                    element: <CompanyInfo />,
                  },
                  { path: 'offer',
                    element: <OfferInfo />,
                  },
                  {
                    path: 'activity',
                    element: <ActivityInfo />,
                    action: modifyActivityInfoAction,
                  },
                  { path: '*', element: <NotFound /> },
                ],
              },
              {
                path: 'activity',
                children: [
                  {
                    path: 'events/:activityId',
                    element: <Activity isEvent={true} />,
                    action: activityAction,
                  },
                  {
                    path: 'events/new',
                    element: <AddActivity isEvent={true} />,
                    action: addActivityAction,
                  },
                  {
                    path: 'tasks/:activity',
                    element: <Activity isEvent={false} />,
                    action: activityAction,
                  },
                  {
                    path: 'tasks/new',
                    element: <AddActivity isEvent={false} />,
                    action: addActivityAction,
                  },
                ],
              },
            ],
          },
          { path: '*', element: <NotFound /> },
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
