import { Spinner } from '@chakra-ui/react';
import { useSession } from '@clerk/clerk-react';
import { PropsWithChildren } from 'react';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoaded, session } = useSession();

  if (!isLoaded) {
    return <Spinner />;
  }

  if (!session?.user) {
    return <>You need to be logged in to view your profile!</>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
