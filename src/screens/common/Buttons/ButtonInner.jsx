import { Icon } from '../Icon/Icon';

export const ButtonInner = ({ icon = '', label = '' }) =>
  icon
    ? (
        <span className='with-icon'>
          {label}
          <Icon icon={icon} aria-hidden='true' focusable='false' />
        </span>
      )
    : (
        label
      );
