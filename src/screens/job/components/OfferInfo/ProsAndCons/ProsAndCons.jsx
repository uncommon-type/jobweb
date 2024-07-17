import { ProsAndConsList } from './ProsAndConsList/ProsAndConsList';
import { AddItemForm } from './AddItemForm';

export const ProsAndCons = ({ label, items }) => (
  <div>
    <h4 className='font-special'>{label}</h4>
    <p> Add up to 5</p>
    <div className='splitter'>
      <AddItemForm />
      <ProsAndConsList items={items} />
    </div>
  </div>
);
