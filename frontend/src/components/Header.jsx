import React from 'react'
import { Link , useLocation} from 'react-router-dom';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Header = () => {

  // handling the user profile 
  const user = useSelector(state => state?.user?.user)


  // handle search functionailty 
  const searchInput = useLocation()


    
    
    // handling the search functionality 
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")
    const [search,setSearch] = useState(searchQuery)
    const handleSearch = (e)=>{
        const { value } = e.target
        setSearch(value)
    
        if(value){
          navigate(`/search?q=${value}`)
        }else{
          navigate("/search")
        }
      }

  return (
    <>

<header className='h-16 shadow-md bg-white fixed w-full z-40'>

    {/* logo section  */}
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    <Logo/>
                </Link>
            </div>


            {/* Search section on Header  */}

<div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none' onChange={handleSearch} value={search} />
                <div className='text-lg min-w-[50px] h-8 bg-orange-600 flex items-center cursor-pointer justify-center rounded-r-full text-white'>
                  <GrSearch />
                </div>
            </div>


            {/* user section  */}

            <div className='flex items-center gap-7'>

                <div className="text-3xl cursor-pointer" >
                {
                          user?.profilePic ? (
                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                          ) : (
                            <FaRegCircleUser/>
                          )
                        }
                   
                </div>

                </div>


                {/* login section  */}

                <div>
                    <Link to={'/login'} className='px-4 py-2 rounded-full  text-white bg-orange-600 hover:bg-orange-700'>Login</Link>
                    <Link to={'/sign-up'} className='px-4 py-2 rounded-full mx-3 text-white bg-orange-600 hover:bg-orange-700'>Sign Up</Link>

                </div>

                {/* sign up  */}
              




            </div>



           




            </header>


    </>
  )
}

export default Header;