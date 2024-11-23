import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { currentUser } = useAuth();
  
  // In a real app, you'd check if the user has admin role
  const isAdmin = currentUser?.email === 'admin@example.com';

  return currentUser && isAdmin ? children : <Navigate to="/" />;
}