import { useUser } from '@clerk/clerk-react';

const HomePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <div>
        <h1>Welcome to my website. Please login first to see more!</h1>
      </div>
    );
  }

  return <div>Hello, {user.firstName} welcome to my SSO React App!</div>;
};

export default HomePage;
