import { Form } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';
import { Input } from '@screens/common/Inputs/Input/Input';

export const SigninSignupForm = ({ isGuest, isLoading, onLinkAction, onChange }) => {
  const ctaLabel = isGuest ? 'Have an account?' : 'Need an account?';
  const ctaURL = isGuest ? '/' : '/signup';

  const ctaMarkup = (
    <span className='cluster'>
      {ctaLabel}
      <Button
        to={isLoading ? '#' : ctaURL}
        label={isGuest ? 'Sign in' : 'Sign up'}
        aria-label={isGuest ? 'Sign in' : 'Sign up'}
        icon='arrow'
        className='with-icon'
        onClick={isLoading ? onLinkAction : null}
      />
    </span>
  );

  const actionMarkup = (
    <Button
      label={isGuest ? 'Sign up' : 'Sign in'}
      type='submit'
      className='button'
      data-type='primary'
      disabled={isLoading}
      icon={isLoading ? 'spinner' : ''}
    />
  );

  return (
    <>
      <h1>{isGuest ? 'Please sign up.' : 'Welcome back. Please sign in.'}</h1>
      <Form method='post' className='login-form flow' noValidate>
        {isGuest && (
          <Input
            name='name'
            label='Name'
            loading={isLoading.toString()}
            onChange={onChange}
            autoCapitalize='none'
            autoCorrect='off'
            spellCheck='false'
            autoComplete='off'
          />
        )}
        <Input
          type='email'
          name='email'
          label='Email'
          loading={isLoading.toString()}
          autoCapitalize='none'
          autoCorrect='off'
          spellCheck='false'
          autoComplete='off'
          onChange={onChange}
        />
        <Input
          type='password'
          name='password'
          label='Password'
          loading={isLoading.toString()}
          onChange={onChange}
        />
        <div className='action-group flow flow-space-l'>
          {actionMarkup}
          {ctaMarkup}
        </div>
      </Form>
    </>
  );
};
