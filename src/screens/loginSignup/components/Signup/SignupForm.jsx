import { getErrorMessage, deleteError, showFormAlert } from '@helpers/form';

import { NameField } from './NameField';
import { EmailField } from '../common/EmailField';
import { PasswordField } from '../common/PasswordField';

import { Alert } from '@screens/common/Alert';

import { SignupButton } from './SignupButton';
import { SignInPrompt } from './SignupPrompt/SigninPrompt';


export const SignupForm = ({
  onSubmit,
  formErrors,
  onFormErrorChange,
  loading,
}) => {
  const { message, errors } = formErrors;

  const changeHandler = (fieldName) => {
    const updatedFormErrors = deleteError(formErrors, fieldName);
    onFormErrorChange(updatedFormErrors);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="login-form flow"
        noValidate
        method="POST"
      >
        <NameField
          error={getErrorMessage(errors, 'name')}
          onChange={changeHandler}
          loading={loading}
        />
        <EmailField
          error={getErrorMessage(errors, 'email')}
          onChange={changeHandler}
          loading={loading}
        />
        <PasswordField
          error={getErrorMessage(errors, 'password')}
          onChange={changeHandler}
          loading={loading}
        />

        <div className="action-group flow flow-space-l">
          <SignupButton loading={loading} disabled={loading} />
          <SignInPrompt loading={loading} />
        </div>
      </form>

      {showFormAlert(formErrors) ? <Alert message={message} /> : null}
    </>
  );
};
