import React from 'react'
import bg from "../../Assets/bg.png";
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='signup'>
            <div className={`grid grid-cols-2 h-screen w-full`} style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div></div>
                <div className="flex items-center">
                    <form className='max-w-[400px] w-full mx-auto bg-[#f8fafc] p-8 px-8 rounded-lg'>
                        <h2 className='text-4x1 text-center'>Sign Up</h2>
                        <div className='flex flex-col text- py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" />
                        </div>
                        <div className='flex flex-col text- py-2'>
                            <label>Username</label>
                            <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="password" />
                        </div>
                        <button className='w-full my-5 py-2 bg-[#E66099] text-white rounded-lg'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
