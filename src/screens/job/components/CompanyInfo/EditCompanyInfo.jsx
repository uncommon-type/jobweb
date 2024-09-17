import { useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { NumericInput } from '@screens/common/Inputs/NumericInput';

export const EditCompanyInfo = () => {
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
      <NumericInput
        label='Size'
        value={company?.size}
        className='width-5'
        name='size'
        error={sizeError}
      />
    </>
  );
};
