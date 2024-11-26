import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { currentUser, isAdmin } = useAuth();
  
  return currentUser && isAdmin ? children : <Navigate to="/" />;
}