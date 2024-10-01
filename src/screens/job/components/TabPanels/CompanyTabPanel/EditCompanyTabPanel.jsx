import { useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { Input } from '@screens/common/Inputs/Input/Input';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';

export const EditCompanyTabPanel = () => {
  const { job, edit, errors } = useOutletContext();
  const { company, benefits } = job;
  const sizeError = getErrorMessage(errors, 'company/size');
  const companyDescriptionError = getErrorMessage(errors, 'company/description');
  const benefitsError = getErrorMessage(errors, 'benefits');

  return (
    <>
      <input
        name='tabName'
        type='hidden'
        value='company'
      />
      <input
        name='companyId'
        type='hidden'
        value={company.id}
      />
      <input
        name='companyName'
        type='hidden'
        value={company.name}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Description'
        value={company.description}
        name='companyDescription'
        error={companyDescriptionError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Benefits'
        value={benefits}
        name='benefits'
        error={benefitsError}
      />
      <Input
        name='size'
        label='Size'
        value={company?.size}
        error={sizeError}
        className='width-5'
      />
    </>
  );
};
