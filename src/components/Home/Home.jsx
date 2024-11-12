import React, { useEffect, useState } from 'react';
import back from '../../assets/blue-background.png';
import { Button, ToggleItem, Footer } from '../index';
import help from '../../assets/help.svg';
import { Link } from 'react-router-dom';
import appwriteAuth from '../../appwrite/appwriteAuth';

function Home() {
   const data = [
      {
         id: 'faq1',
         question: 'How to create an account?',
         answer:
            'Click on the Get Started button and fill the form to register yourself. You will receive a confirmation email after successful registration.',
         sk: 'svg1',
      },
      {
         id: 'faq2',
         question: 'how to delete an account?',
         answer:
            'Goto your profile and scroll down there is a account delete button click on it and your account will be deleted',
         sk: 'svg2',
      },
      {
         id: 'faq3',
         question: 'How to change password?',
         answer:
            'Goto your profile and scroll down there is a change password button click on it and change your password',
         sk: 'svg3',
      },
      {
         id: 'faq4',
         question: 'How to change email?',
         answer:
            'Goto your profile and scroll down there is a change email button click on it and change your email',
         sk: 'svg4',
      },
      {
         id: 'faq5',
         question: 'How to change username?',
         answer:
            'Goto your profile and scroll down there is a change username button click on it and change your username',
         sk: 'svg5',
      },
   ];

   let [user, setUser] = useState(null);

   useEffect(() => {
      appwriteAuth
         .getUserAccount()
         .then((data) => {
            setUser(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <>
         <div className=' mt-20 mb-20'>
            <div className='mt-10 mb-32'>
               <h1 className=' text-center max-sm:text-xs text-2xl font-bold'>
                  Build Learn And Grow <br></br>{' '}
                  <span>No Matter Where Are You Come From</span>
               </h1>
               <div className='w-full flex flex-row items-center justify-center gap-4 mt-4'>
                  {user ? (
                     <Link to='/articles'>
                        <Button
                           children='Read Articles'
                           className='text-white bg-black px-6 py-2 border max-sm:text-xs max-sm:px-3 max-sm:py-1 border-black'
                        />
                     </Link>
                  ) : (
                     <Link to='/login'>
                        <Button
                           children='Get Started'
                           className='text-white bg-black px-6 py-2 border max-sm:text-xs max-sm:px-3 max-sm:py-1 border-black'
                        />
                     </Link>
                  )}

                  <Button
                     children='Watch Video'
                     className='border border-black px-6 font-medium py-2 max-sm:text-xs max-sm:px-3 max-sm:py-1'
                  />
               </div>
               <img src={back} alt='Wave' />
            </div>

            <div className='flex flex-row max-sm:flex-col items-center justify-between m-10 max-sm:m-5 max-sm:gap-4  border border-black rounded rounded-lg px-7 py-7'>
               <h2 className='font-bold text-xl max-sm:text-sm max-sm:font-medium'>
                  Explore and learn <br className='max-sm:hidden' /> more on
               </h2>
               <div className='text-4xl max-sm:text-2xl flex items-center gap-4'>
                  <i className='fa-brands fa-react'></i>
                  <i className='fa-brands fa-css3-alt'></i>
                  <i className='fa-brands fa-html5'></i>
                  <i className='fa-brands fa-js'></i>
                  <i className='fa-brands fa-sass'></i>
                  <i className='fa-brands fa-angular'></i>
                  <p className='text-xs max-sm:hidden'>
                     View More <i className='fa-solid fa-arrow-right'></i>
                  </p>
               </div>
            </div>
            <div className='flex flex-row  items-center justify-between mt-20 px-20 max-sm:px-10 py-10'>
               <div className='w-full pr-40 max-sm:p-0'>
                  <h2 className='text-4xl font-bold max-md:text-xl max-xl:text-2xl max-sm:text-3xl  mb-5'>
                     Help Desk
                  </h2>
                  {data.map((item, index) => {
                     return (
                        <ToggleItem
                           key={item.id}
                           length={data.length}
                           index={index}
                           sk={item.sk}
                           question={item.question}
                           answer={item.answer}
                           id={item.id}
                        />
                     );
                  })}
               </div>
               <div className='w-[50rem] max-md:hidden max-lg:hidden'>
                  <img src={help} alt='' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
