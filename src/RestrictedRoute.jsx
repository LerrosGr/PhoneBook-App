import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({ component, registerTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={registerTo} /> : component;
}
