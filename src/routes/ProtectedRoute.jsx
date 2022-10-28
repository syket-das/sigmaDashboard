import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const ProtectedRoute = ({ children }) => {
  const { userInfo: user } = useSelector((state) => state.userLogin);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
