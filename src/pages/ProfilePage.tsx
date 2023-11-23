import { useUser } from '@clerk/clerk-react';

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Name: {user?.fullName}</h1>
      <h1>E-mail: {user?.emailAddresses[0].emailAddress}</h1>
      <h1>Last signed in: {user?.lastSignInAt?.toDateString()}</h1>
    </div>
  );
};

export default ProfilePage;
