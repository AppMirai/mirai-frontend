import React from 'react'
import bg from "../../Assets/bg.png";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const SignIn = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        // LOGIN TANPA API
        if (user.email === "admin" && user.password === "adminA1") {
            localStorage.setItem("token", 123);
            navigate("/tableusers");
        } else {
            alert("Login gagal");
        }

        // LOGIC TANPA REQUEST API
        // const requestBody = { email: user.email, password: user.password };
        // axios
        //     .post(`http://localhost:8000/api/auth/login`, requestBody)
        //     .then((res) => {
        //         console.log(res);
        //         alert("login berhasil");
        //         localStorage.setItem("token", res.data.token);
        //         navigate("/dashboard");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         alert("login gagal", err);
        //     });
    };

    return (
        <div className='signin'>
            <div className={`grid grid-cols-2 h-screen w-full`} style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div></div>
                <div className="flex items-center">
                    <form className='max-w-[400px] w-full mx-auto bg-[#f8fafc] p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                        <h2 className='text-4x1 text-center'>Sign In</h2>
                        <div className='flex flex-col text- py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" name='email' onChange={handleInput} />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="password" name='password' onChange={handleInput} />
                        </div>
                            <button onClick={handleClick} className='w-full my-5 py-2 bg-[#E66099] text-white rounded-lg'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn