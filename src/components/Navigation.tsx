import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import {
  useSession,
  useClerk,
  UserButton,
  SignInButton,
} from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const { session } = useSession();

  return (
    <div className='navigation'>
      <Breadcrumb
        separator='/'
        padding='30px'
        fontFamily='fantasy'
        fontWeight={900}
        fontSize={25}
        width='85%'
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/'>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/about'>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/profile'>
            Profile
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className='sign-in'>
        {session ? <UserButton /> : <SignInButton />}
      </div>
    </div>
  );
};

export default Navigation;
