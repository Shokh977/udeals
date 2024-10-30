'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import useStoreAuth from '@/store/useAuthStore'
import Link from 'next/link'
import { LoaderCircle } from 'lucide-react';


const SignupForm = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, user, isAuthenticated, isLoading, isCheckingAuth, checkAuth } = useStoreAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      router.push('/shop')    
      }
  catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='h-screen my-20'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mx-auto border dark:bg-gray-900 max-w-md py-8 rounded-md px-2 shadow-md' >
           <h1 className='text-orange-500 font-bold text-2xl mx-auto'>Create an Account</h1>
 <input className='p-4 rounded border border-orange-300 dark:bg-gray-800 mx-2' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input className= ' border border-orange-300 p-4 rounded dark:bg-gray-800 mx-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input className=' border border-orange-300 p-4 rounded dark:bg-gray-800 mx-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <div className='mx-auto'>
       <button type="submit" className='border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-8 py-2 text-lg mx-2 '>{isLoading ? <LoaderCircle className='animate-spin'/> : "Sign Up"}</button>
      </div>
      {error && <p>{error}</p>}   
      <div className='text-sm mx-auto text-gray-400 flex gap-2'>
               <p>Do you have an account?</p>
               <Link className='hover:underline duration-300 text-orange-500' href='/login'>Login</Link>

      </div>

    </form>
    </div>
  );
};

export default SignupForm;
