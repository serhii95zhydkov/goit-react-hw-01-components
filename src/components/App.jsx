import Profile from "./Profile/Profile";
import user from '../data/user.json'

// console.log(user);

export const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};
