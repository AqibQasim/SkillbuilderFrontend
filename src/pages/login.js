import React from 'react';
import Image from 'next/image';

const LoginPage = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 pt-16 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-darkgray text-center">Welcome Back</h2>
        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-4 mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email<span className=''>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password<span className=''>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
            
          </div>
          <span className="ml-2 text-sm font-semibold text-blue">
                Forgot Password?
              </span>

          {/* Sign Up Button */}
          <div className="mb-4 mt-8">
            <button
              type="submit"
              className="w-full bg-blue text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>

        {/* Social Logins */}
        <div className="mt-4">
          <p className="text-center text-gray-600 mb-2">Or</p>
          <button className="bg-white bg-blue-700 border mb-4 w-full border-black text-black p-2 rounded-lg  flex items-center justify-center">
            <span className="mr-2">
                <Image src="/googlelogo.png" width={25} height={25}/>
                {/* <img src={googleicon} width={24} height={24} alt="Google Icon" /> */}
            </span>
            <span>Continue with Google</span>
           </button>

           <button className="bg-white bg-blue-700 border mb-4 w-full border-black text-black p-2 rounded-lg flex items-center justify-center">
            <span className="mr-2">
                <Image src="/applelogo.png" width={25} height={25}/>
                {/* <img src={facebookicon} width={24} height={24} alt="Facebook Icon" /> */}
            </span>
            <span>Continue with Facebook</span>
           </button>

        </div>
        <div className="text-center mt-4">
          <p className='text-sm'>
            New to SkillBuilder <a href="/login" className="text-blue-600 hover:underline"> Signup</a>
          </p>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;