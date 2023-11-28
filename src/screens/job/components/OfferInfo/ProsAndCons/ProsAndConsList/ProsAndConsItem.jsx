import { XMarkIcon as CloseIcon } from '@heroicons/react/24/outline';

export const ProsAndConsItem = ({ item }) => {
  return (
    <p className="with-icon">
      <span className="pros-and-cons__label">{item.title}</span>
      <span>
        <CloseIcon />
      </span>
    </p>
  );
};
