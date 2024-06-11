import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IoPersonOutline } from '../utils/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const ProfileDropDownMenu = () => {
  const auth = useSelector(
    (store: {
      auth: {
        user: null;
        isAuthenticated: boolean;
      };
    }) => store.auth
  );

  return (
    <div className='grid grid-cols-2 gap-2'>
      {auth.isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoPersonOutline size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DropdownMenuLabel>
                <IoPersonOutline size={60} />
              </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator />
            <Link href='/login'>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoPersonOutline size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href='/login'>
              <DropdownMenuItem>Log In / Sign Up</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ProfileDropDownMenu;
