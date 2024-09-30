import { createBrowserRouter, Outlet, redirect } from 'react-router-dom';

import { Root } from './Root';
import { PageError } from '@screens/common/Error/PageError';
import { SigninSignup, signinAction, signinLoader, signupAction } from '@screens/signinSignup/SigninSignup';
import { Jobs, jobsLoader, deleteJobAction } from '@screens/jobs/Jobs';
import { Job, jobLoader, updateJobAction } from '@screens/job/Job';
import { JobItem } from '@screens/job/components/JobItem';
import { RoleTabPanel } from '@screens/job/components/TabPanels/RoleTabPanel/RoleTabPanel';
import { CompanyTabPanel } from '@screens/job/components/TabPanels/CompanyTabPanel/CompanyTabPanel';
import { ActivityTabPanel, updateActivityStatusAction, deleteActivityAction } from '@screens/job/components/TabPanels/ActivityTabPanel/ActivityTabPanel';
import { OfferTabPanel, deleteTagAction, addProTagAction, addConTagAction } from '@screens/job/components/TabPanels/OfferTabPanel/OfferTabPanel';/// new
import { AddJob, addJobAction } from '@screens/addJob/AddJob';
import { Activity, updateActivityAction } from '@screens/activity/Activity';
import { AddActivity, addActivityAction } from '@screens/addActivity/AddActivity';
import { NotFound } from '@screens/notFound/NotFound';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <SigninSignup isGuest={false} />,
        action: signinAction,
        loader: signinLoader,
      },
      {
        path: 'signup',
        element: <SigninSignup isGuest={true} />,
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
            action: deleteJobAction,
          },
          {
            path: 'new',
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: ':jobId',
            element: <Job />,
            loader: jobLoader,
            action: updateJobAction,
            children: [
              {
                element: <JobItem />,
                children: [
                  {
                    index: true,
                    element: <RoleTabPanel />,
                  },
                  {
                    path: 'role',
                    element: <RoleTabPanel />,
                  },
                  { path: 'company',
                    element: <CompanyTabPanel />,
                  },
                  { path: 'offer',
                    element: <OfferTabPanel />,
                    children: [
                      { path: 'tags/pro',
                        action: addProTagAction,
                      },
                      { path: 'tags/con',
                        action: addConTagAction,
                      },
                      { path: 'tags/:tagId',
                        action: deleteTagAction,
                      },
                    ],
                  },
                  {
                    path: 'activity',
                    children: [
                      { index: true,
                        element: <ActivityTabPanel />,
                      },
                      { path: 'status',
                        action: updateActivityStatusAction,
                      },
                      { path: 'ended',
                        action: deleteActivityAction,
                      },
                    ],
                  },
                ],
              },
              {
                path: 'activity',
                children: [
                  {
                    path: 'events',
                    children: [
                      {
                        path: ':activityId',
                        element: <Activity isEvent={true} />,
                        action: updateActivityAction,
                      },
                      {
                        path: 'new',
                        element: <AddActivity isEvent={true} />,
                        action: addActivityAction,
                      },
                      { path: '*',
                        element: <NotFound />,
                      },
                    ],
                  },
                  {
                    path: 'tasks',
                    children: [
                      {
                        path: ':activityId',
                        element: <Activity isEvent={false} />,
                        action: updateActivityAction,
                      },
                      {
                        path: 'new',
                        element: <AddActivity isEvent={false} />,
                        action: addActivityAction,
                      },
                      {
                        path: '*',
                        element: <NotFound />,
                      },
                    ],
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
