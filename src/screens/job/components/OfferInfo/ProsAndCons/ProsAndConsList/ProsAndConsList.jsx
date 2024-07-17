import { ProsAndConsItem } from './ProsAndConsItem';

export const ProsAndConsList = ({ items = [] }) => (
  <div className='pros-and-cons-group flow'>
    {items.map(item => (
      <ProsAndConsItem key={item.id} item={item} />
    ))}
  </div>
);
