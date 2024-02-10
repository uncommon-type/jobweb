import { useLoaderData, useLocation, redirect } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

import { JobContent } from './components/JobContent';
import { JobNotFound } from './components/JobNotFound';


export const loader = async ({ params }) => {
    const token = authenticate();

    if (!token) {
        return redirect('/');
    }

    let job;

    try {
        job = await getJob(params.jobId, token);
    } catch (err) {
        if (err.status !== 404) {
            throw new Error('Something went wrong')
        }
    }

    return { job };
}

export const Job = () => {
    const { job } = useLoaderData();
    const location = useLocation();
    const from = location.state?.from || '/jobs';

    if (!job) {
        return <JobNotFound from={from} />
    }

    return (
        <JobContent from={from} job={job} />
    );
};
