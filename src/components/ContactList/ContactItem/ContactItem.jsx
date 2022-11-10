import PT from 'prop-types';
import { useDispatch } from 'react-redux';
import { phoneBookSlice } from 'redux/phoneBook.slice';
import s from './ContactItem.module.css';
export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}{' '}
      <button
        className={s.btn}
        onClick={() => dispatch(phoneBookSlice.actions.delItem(id))}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PT.string.isRequired,
  name: PT.string.isRequired,
  number: PT.string.isRequired,
};
