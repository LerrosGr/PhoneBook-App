import { useId } from 'react';
import { changeTextFilter } from '../../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => dispatch(changeTextFilter(e.target.value))}
        placeholder="Search..."
        id={id}
      />
    </div>
  );
}
