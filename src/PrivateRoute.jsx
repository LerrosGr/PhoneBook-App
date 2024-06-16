import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, registerTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={registerTo} />;
}
