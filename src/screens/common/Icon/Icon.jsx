import { ArrowLongRightIcon as ArrowIcon, XMarkIcon as CloseIcon, PlusIcon } from '@heroicons/react/24/outline';
import { SpinnerIcon } from './images/SpinnerIcon';

const ICON_MAP = {
  arrow: ArrowIcon,
  spinner: SpinnerIcon,
  closeIcon: CloseIcon,
  plusIcon: PlusIcon,
};

export const Icon = ({ icon = '', ...props }) => {
  const IconComponent = ICON_MAP[icon];

  return <IconComponent {...props} />;
};
