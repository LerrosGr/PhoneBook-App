import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispath = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispath(logOut());
  };

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
}
