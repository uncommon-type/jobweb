import { SignupForm } from './SignupForm';

export const Signup = ({
  handleSignup,
  formErrors,
  setFormErrors,
  loading,
}) => {
  return (
    <main>
      <section className="login-group">
        <div className="login-group__inner flow flow-space-xs">
          <h1>Please sign up</h1>
          <SignupForm
            onSubmit={handleSignup}
            formErrors={formErrors}
            onFormErrorChange={setFormErrors}
            loading={loading}
          />
        </div>
      </section>
    </main>
  );
};
