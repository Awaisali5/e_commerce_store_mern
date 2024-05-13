import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImagetoBase64 from '../Helper/ImagetoBase64';
function SignUp() {
    // handling the password 


    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

    // handling form data 

    const [data,setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : "",
        profilePic : "",
    })

    // handling change 

    const handleOnChange = (e) =>{
        const { name , value } = e.target
  
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

      // form submit handling 

  const handleSubmit = async(e) =>{
    e.preventDefault();

  }


//   handling the profile pic uploaded 

const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await ImagetoBase64(file)
    console.log(`file image is :`, file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }






  return (
    <><h1 className='flex justify-center  italic text-orange-700'>SignUp</h1>

<section id='signup'>
        <div className='mx-auto container p-4'>
            

            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
               

                {/* profile photo  */}

                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div> 

{/* form to get or set the profile photo  */}

                         <form>
                          <label>
                            <div className='text-xs  bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>

                    {/* main form to get the user Data  */}

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                      <div className='grid'>
                              <label>Username : </label>
                              <div className='bg-slate-100 p-2'>
                                  <input 
                                      type='text' 
                                      placeholder='Enter your Username' 
                                      name='name'
                                      value={data.name}
                                      onChange={handleOnChange}
                                      required
                                      className='w-full h-full outline-none bg-transparent'/>
                              </div>
                          </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='Enter Your Email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter Your Password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder='Enter Your confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>

                                <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 w-full max-w-[200px]  hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

                    </form>

                    <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-blue-600 hover:text-blue-700 hover:underline'>Login</Link></p>
            </div>


        </div>
    </section>

    
    
    </>
  )
}

export default SignUp