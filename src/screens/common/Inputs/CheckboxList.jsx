import { useId } from 'react';
import { useFetcher } from 'react-router-dom';

import { Checkbox } from './Checkbox/Checkbox';
import { Button } from '../Buttons/Button';

export const CheckboxList = ({ name, options, selected, onChange, fetcherkey, action = false, ...otherProps }) => {
  const fetcher = useFetcher(fetcherkey);
  const appliedName = name ?? useId();

  const wrapperClassName = 'flow flow-space-xl option-list';
  const listItemClassName = 'cluster option-list__item';
  const formClassName = 'full-width';
  const buttonClassName = 'cluster option-button';

  return (
    <ul className={wrapperClassName}>
      {options.map((option) => {
        const { id, label, value, link, type } = option;
        const optionIsSelected = ({ value }, selected) => {
          return selected.includes(value);
        };

        return (
          <li key={option.id} className={listItemClassName}>
            <fetcher.Form className={formClassName}>
              <Checkbox
                id={id}
                name={appliedName}
                label={label}
                value={value}
                checked={optionIsSelected(option, selected)}
                onChange={onChange}
                link={link}
                data-type={type}
                {...otherProps}
              />
            </fetcher.Form>
            {action && (
              <Button
                className={buttonClassName}
                icon={action.icon}
                aria-label={action.name}
                onClick={e => action.handler(e)}
                id={option.id}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
