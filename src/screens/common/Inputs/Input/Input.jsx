import { useId, forwardRef } from 'react';

import { Labelled } from '../Label/Labelled';
import { InlineError } from '@screens/common/Error/InlineError';
import { Button } from '@screens/common/Buttons/Button';

export const Input = forwardRef(
  function Input({ id, name, label, labelHidden, action = {}, value = '', error, type = 'text', onChange, disabled, readOnly,
    pattern, minLength, maxLength, rows, message, className, helpText, prefix, suffix, autoCapitalize, autoCorrect,
    spellCheck, autoComplete }, ref) {
    const generatedId = useId();
    const appliedId = id || generatedId;

    const errorMarkup = error && (
      <InlineError error={error} />
    );

    const actionMarkup = (
      <Button
        variant={action.variant}
        icon={action.icon}
        aria-label={action.name}
        disabled={disabled}
        type={action.type}
        value={name}
        onClick={e => action.handler(e)}
      />
    );

    const inputMarkup = (
      <input
        ref={ref}
        type={type}
        id={appliedId}
        name={name}
        defaultValue={value}
        className={prefix && suffix && 'input width-8'}
        onChange={onChange}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
      />
    );

    const suffixMarkup = suffix && (
      <div className='input-suffix' aria-hidden='true'>
        {suffix}
      </div>
    );

    const prefixMarkup = prefix && (
      <div className='input-prefix' aria-hidden='true'>
        {prefix}
      </div>
    );

    const prefixSuffixWrapperClass = prefix ? 'prefixed-suffixed-input cluster' : '';

    const prefixSuffixMarkup = prefix && suffix
      ? (
          <div className={prefixSuffixWrapperClass}>
            { prefixMarkup }
            { inputMarkup }
            { suffixMarkup }
          </div>
        )
      : inputMarkup;

    return (
      <Labelled
        id={appliedId}
        label={label}
        labelHidden={labelHidden}
        helpText={helpText}
        className={className}
      >
        {message && message}
        {error && errorMarkup}
        {Object.keys(action).length > 0
          ? (
              <div className='cluster'>
                {prefixSuffixMarkup}
                {actionMarkup}
              </div>
            )
          : prefixSuffixMarkup}
      </Labelled>
    );
  });
