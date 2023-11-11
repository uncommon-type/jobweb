import { useAuth } from '@hooks/useAuth';

export const Header = ({ children }) => {
  const { authed } = useAuth();
  return authed && <header>{children}</header>;
};
