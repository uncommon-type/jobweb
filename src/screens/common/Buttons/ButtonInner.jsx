import { Icon } from '../Icon/Icon';

export const ButtonInner = ({ icon = '', label = '' }) =>
  icon
    ? (
        <>
          {label}
          <Icon icon={icon} aria-hidden='true' focusable='false' />
        </>
      )
    : (
        label
      );
