import React from 'react';
import appwriteAuth from '../../appwrite/appwriteAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import { Link } from 'react-router-dom';

function Profile() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const user = useSelector((state) => state.userAuth.userData.userData);

   const logoutHandler = async () => {
      try {
         await appwriteAuth.logout();
         dispatch(logout());
         navigate('/');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='flex items-center flex-row gap-4'>
         <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button
               type='button'
               onClick={() => {
                  document
                     .getElementById('user-dropdown')
                     .classList.toggle('hidden');
               }}
               className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
               id='user-menu-button'
               aria-expanded='false'
               data-dropdown-toggle='user-dropdown'
               data-dropdown-placement='bottom'
            >
               <span className='sr-only'>Open user menu</span>
               <div className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <img
                     className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                     src='https://avatar.iran.liara.run/public/boy'
                     alt='Bordered avatar'
                  />
               </div>
            </button>

            <div
               className='z-50 hidden absolute top-12 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
               id='user-dropdown'
            >
               <div className='px-4 py-3'>
                  <span className='block text-sm text-gray-900 dark:text-white'>
                     {user?.name}
                  </span>
                  <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                     {user?.email}
                  </span>
               </div>
               <ul className='py-2' aria-labelledby='user-menu-button'>
                  {user?.labels[0] === 'admin' && (
                     <li>
                        <Link
                           to='/create'
                           className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                        >
                           Create Post
                        </Link>
                     </li>
                  )}
                  <li>
                     <Link
                        to='/profile'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                     >
                        Profile
                     </Link>
                  </li>
                  <li>
                     <Link
                        to='/articles'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                     >
                        All Articles
                     </Link>
                  </li>
                  <li>
                     <Link
                        onClick={logoutHandler}
                        type='button'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                     >
                        Logout
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Profile;
