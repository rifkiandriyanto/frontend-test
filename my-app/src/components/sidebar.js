import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { SlHandbag, SlBasket } from 'react-icons/sl';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const location = useLocation().pathname;

  return (
    <div className='w-full bg-white h-full border-r-2 border-gray-300 relative flex items-center'>
      <img src='logo192.png' className='w-20 ml-5 absolute top-0' alt='logo' />
      <div className='px-5 w-full'>
        <Link to={'/home'}>
          <div
            className={location === '/' ? 'list-navbar-active' : 'list-navbar'}
          >
            <AiOutlineHome className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>Homepage</p>
          </div>
        </Link>
        <Link to={'/sales'}>
          <div
            className={
              location === '/sales' ? 'list-navbar-active' : 'list-navbar'
            }
          >
            <SlHandbag className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>Sales</p>
          </div>
        </Link>
        <Link to={'/inventory'}>
          <div
            className={
              location === '/inventory' ? 'list-navbar-active' : 'list-navbar'
            }
          >
            <MdOutlineInventory2 className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>Inventory</p>
          </div>
        </Link>
        <Link to={'/purchase'}>
          <div
            className={
              location === '/purchase' ? 'list-navbar-active' : 'list-navbar'
            }
          >
            <SlBasket className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>Purchase</p>
          </div>
        </Link>
        <Link to={'/user'}>
          <div
            className={
              location === '/user' ? 'list-navbar-active' : 'list-navbar'
            }
          >
            <BiUserCircle className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>User Management</p>
          </div>
        </Link>
        <Link to={'/'}>
          <div className={'list-navbar'}>
            <AiOutlineLogout className='mb-1 mr-4 text-lg' />
            <p className='font-semibold'>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
