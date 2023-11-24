import { useUser } from '@clerk/clerk-react';

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div>
      <div>
        Name: <b>{user?.fullName}</b>
      </div>

      <div>
        E-mail: <b>{user?.emailAddresses[0].emailAddress}</b>
      </div>

      <div>
        Joined: <b>{user?.createdAt?.toDateString()}</b>
      </div>

      <div>
        Last signed in: <b>{user?.lastSignInAt?.toDateString()}</b>
      </div>
    </div>
  );
};

export default ProfilePage;
