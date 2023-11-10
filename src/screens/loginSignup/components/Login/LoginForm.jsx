import { EmailField } from '../common/EmailField';
import { PasswordField } from '../common/PasswordField';
import { SignInButton } from './SignInButton';
import { SignInPrompt } from './SignInPrompt/SignInPrompt';
import { Alert } from '@screens/common/Alert';
import { deleteError, showFormAlert } from '@helpers/form';

export const LoginForm = ({
  onSubmit,
  formErrors,
  onFormErrorChange,
  loading,
}) => {
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
        <EmailField onChange={changeHandler} loading={loading} />
        <PasswordField onChange={changeHandler} loading={loading} />
        <div className="action-group flow flow-space-l">
          <SignInButton loading={loading} disabled={loading} />
          <SignInPrompt loading={loading} />
        </div>
      </form>

      {showFormAlert(formErrors) ? <Alert message="Login failed" /> : null}
    </>
  );
};
