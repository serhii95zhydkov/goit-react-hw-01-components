import Profile from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};
