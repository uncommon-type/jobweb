import { LoginForm } from './LoginForm';

export const Login = ({ handleLogin, formErrors, setFormErrors, loading }) => {
  return (
    <main>
      <section className="login-group">
        <div className="login-group__inner flow flow-space-xs">
          <h1>Welcome back. Please sign in.</h1>
          <LoginForm
            onSubmit={handleLogin}
            formErrors={formErrors}
            onFormErrorChange={setFormErrors}
            loading={loading}
          />
        </div>
      </section>
    </main>
  );
};
