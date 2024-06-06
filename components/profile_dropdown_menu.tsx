
import Link from 'next/link';
import { BsBag, IoPersonOutline, AiOutlineHeart } from '../utils/icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"
  

const ProfileDropDownMenu = () => {
    return (
        <DropdownMenu>
              <DropdownMenuTrigger><IoPersonOutline size={20} /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href='/login'>
                  <DropdownMenuItem>Log In / Sign Up</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
    );
}

export default ProfileDropDownMenu;