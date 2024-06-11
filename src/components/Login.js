import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch , useSelector } from 'react-redux';
import { loginUser } from '../../redux/thunks/auththunks';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser ( { email , password}))
  }
  const emailchangeHandler = (event) =>{
    setEmail(event.target.value);
  }
  const passwordchangeHandler = (event) =>{
    setPassword(event.target.value);
  }
    return (
        
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-darkgray text-center">Welcome Back</h2>
        {/* Form */}
        <form onSubmit={SubmitHandler}>
          {/* Email */}
          <div className="mb-4 mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email<span className='text-red-500 text-lg'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
              onChange={emailchangeHandler}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password<span className='text-red-500 text-lg'>*</span>
            </label> 
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
              onChange={passwordchangeHandler}
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <span className="ml-2 text-sm font-semibold text-blue">
                Forgot Password?
              </span>

          {/* Sign Up Button */}
          <div className="mb-4 mt-8">
            <button
              type="submit"
              className="w-full bg-blue text-white p-2 rounded-lg hover:bg-blue-600"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Social Logins */}
        <div className="mt-4">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
          <button className="bg-white mt-4  border mb-4 w-full border-lightgray text-black p-2 rounded-lg flex items-center justify-center">
            <span className="mr-2">
                <Image src="/googlelogo.png" width={25} height={25}/>
                {/* <img src={googleicon} width={24} height={24} alt="Google Icon" /> */}
            </span>
            <span className="font-semibold text-sm">Continue with Google</span>
           </button>

           <button className="bg-white border mb-4 w-full border-lightgray text-black p-2 rounded-lg flex items-center justify-center">
            <span className="mr-2">
                <Image src="/applelogo.png" width={25} height={25}/>
                {/* <img src={facebookicon} width={24} height={24} alt="Facebook Icon" /> */}
            </span>
            <span className="font-semibold text-sm">Continue with Apple</span>
           </button>

        </div>
        <div className="text-center mt-4">
          <p className='text-sm'>
            New to SkillBuilder <Link href="/signup"  className="text-blue-600 hover:underline"> Signup</Link>
          </p>
        </div>
      </div>
    );
};

export default Login;