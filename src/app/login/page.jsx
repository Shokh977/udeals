'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import useStoreAuth from '@/store/useAuthStore'
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error ,isLoading} = useStoreAuth();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    router.push('/shop')
  };

  return (
    <div className='h-screen my-20'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mx-auto border dark:bg-gray-900 max-w-md py-8 rounded-md px-2 shadow-md' >
         <h1 className='text-orange-500 font-bold text-2xl mx-auto'>Login</h1>
    <input className= ' border border-orange-300 p-4 rounded dark:bg-gray-800 mx-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
    <input className=' border border-orange-300 p-4 rounded dark:bg-gray-800 mx-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
    <div className='mx-auto'>
     <button type="submit" className='border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-8 py-2 text-lg mx-2 '>{isLoading ? <LoaderCircle className='animate-spin'/> : "Login"}</button>
    </div>
    {error && <p>{error}</p>}   
    <div className='text-sm mx-auto text-gray-400 flex gap-2'>
             <p>Do you not have an account?</p>
             <Link className='hover:underline duration-300 text-orange-500' href='/signup'>Signup</Link>

    </div>

  </form>
  </div>
  );
};

export default Login;
