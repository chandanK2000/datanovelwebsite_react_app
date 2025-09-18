import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('loggedInUser');
  const hasWarned = useRef(false);

  useEffect(() => {
    if (!isLoggedIn && !hasWarned.current) {
      toast.warn('⚠️ Please login to see this page');
      hasWarned.current = true;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/videoAnalaytics" replace />;
  }

  return children;
};

export default ProtectedRoute;
