import { Tab } from './Tab';

const TABS = [
  { label: 'Role', path: 'role' },
  { label: 'Company', path: 'company' },
  { label: 'Activity', path: 'activity' },
  { label: 'Offer details', path: 'offer' },
];

export const TabList = ({ onChange, jobStatus }) => {
  const tabListToDisplay = jobStatus === 'Offer received' ? TABS : TABS.filter(link => link.label !== 'Offer details');

  return (
    <nav className='job-details-tabs'>
      <ul role='list' className='job-details-tablist cluster'>
        {tabListToDisplay.map(({ label, path }) => (
          <Tab key={label} label={label} path={path} onChange={onChange} />
        ))}
      </ul>
    </nav>
  );
};
