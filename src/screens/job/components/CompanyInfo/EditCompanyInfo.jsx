import { getErrorMessage } from '@helpers/form';

import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { NumericInput } from '@screens/common/Inputs/NumericInput';

export const EditCompanyInfo = ({ job, edit, errors }) => {
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
        value={job.company.id}
      />
      <input
        name='companyName'
        type='hidden'
        value={job.company.name}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Description'
        value={job.company.description}
        name='companyDescription'
        error={companyDescriptionError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Benefits'
        value={job.benefits}
        name='benefits'
        error={benefitsError}
      />
      <NumericInput
        label='Size'
        value={job.company?.size}
        className='width-5'
        name='size'
        error={sizeError}
      />
    </>
  );
};
