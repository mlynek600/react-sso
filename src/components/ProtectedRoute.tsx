import { Spinner } from "@chakra-ui/react";
import { useSession } from "@clerk/clerk-react";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoaded, session } = useSession()

  if (!isLoaded) {
    return <Spinner />
  }
  
  if (!session?.user) {
    return <Navigate to='/' />
  }

  return <>{children}</>
  
}

export default ProtectedRoute;