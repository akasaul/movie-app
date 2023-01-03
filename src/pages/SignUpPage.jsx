import React from 'react'

const SignUpPage = () => {
  return (
    <div className='h-screen bg-centerf flex flex-col justify-center' style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/a1270f53-deb2-488b-9c80-1da42389802a/ET-en-20221228-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}}>
        <Link to="/">
            <img src="/nikoflix.png" className='object-contain h-24 absolute top-8 left-8' alt="" />
        </Link>

        <div className='w-[40%] mx-auto p-8 bg-black/90 backdrop-blur'>
            <div className='flex flex-col space-y-5'>
                <h2 className='text-3xl'>Sign Up</h2>
                <div className='flex flex-col space-y-5'>
                    <input type="text" placeholder="Name" className="input input-bordered h-12 input-error w-full border-black" />
                    <input type="email" placeholder="Email" className="input input-bordered h-12 input-error w-full border-black" />
                    <input type="text" placeholder="Password" className="input input-bordered h-12 input-error w-full border-black " />
                    <button className='bg-red p-3 text-[1.3rem] rounded'>Sign Up</button>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-lightGray'>Already have an account?</p>
                  <a href="/login" className='text-lightGray hover:text-white'>Sign In</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage