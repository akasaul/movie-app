import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../firebase";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({
    name: "",
    email: "", 
    password: ""
  });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const cred = await createUserWithEmailAndPassword(auth, formObj.email, formObj.password);
      updateProfile(auth.currentUser, {
        displayName: formObj.name
      }).then(() => console.log("Profile updated"));
      setFormObj({
        name: "",
        email: "",
        password: "",
      })
    }
  return (
    <div className='h-screen bg-centerf flex flex-col justify-center' style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/a1270f53-deb2-488b-9c80-1da42389802a/ET-en-20221228-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}}>
        <Link to="/">
            <img src="/nikoflix.png" className='object-contain h-24 top-0 absolute sm:top-8 left-8' alt="" />
        </Link>

        <div className='w-[40%] max-w-[500px] min-w-[250px] mx-auto p-8 bg-black/90 backdrop-blur'>
            <div className='flex flex-col space-y-5'>
                <h2 className='text-3xl'>Sign Up</h2>
                <form className='flex flex-col space-y-5' onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="Name" name="name" value={formObj.name} onChange={(e) => setFormObj({...formObj, [e.target.name]: e.target.value})} className="input input-bordered h-12 input-error  text-black w-full border-black" />
                    <input type="email" placeholder="Email" name="email" value={formObj.email} onChange={(e) => setFormObj({...formObj, [e.target.name]: e.target.value})} className="input input-bordered h-12 input-error text-black w-full border-black" />
                    <input type="password" placeholder="Password" name="password" value={formObj.password} onChange={(e) => setFormObj({...formObj, [e.target.name]: e.target.value})} className="input input-bordered h-12  text-black input-error w-full border-black " />
                    <button className='bg-red p-3 text-[1.3rem] rounded' type="submit">Sign Up</button>
                </form>
                <div className='flex items-center justify-between'>
                  <p className='text-lightGray'>Already have an account?</p>
                  <Link to="/login"> <p className='text-lightGray hover:text-white'>Sign In</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}


export default SignUpPage