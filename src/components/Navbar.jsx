import React,{ useState } from 'react'
import logo from "../assets/logo.png"
import SignUpForm from './SignUpForm';

const Navbar = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <nav className=' h-16  lg:px-[72px] px-5  '>
      <div className="flex justify-between items-center my-[24px] ">
        <img src={logo} alt="logo" className='h-[24px] w-[162px] '/>
       
      
            <div className="search-bar bg-[#F2F2F2] border-2 rounded-3xl text-[#5C5C5C] h-[42px] w-[300px] flex items-center justify-start gap-4 font-medium text-[14px] px-[14px] py-[10px] hidden lg:block ">
            <i className="fa-solid fa-magnifying-glass"></i>
           Search for your favorite groups in ATG
           </div>    
        <div className=" cursor-pointer" onClick={openForm}>
        Create account. <span className='text-blue-700'>It’s free!</span> <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>  
      <SignUpForm isOpen={isFormOpen} onClose={closeForm} />    
    </nav>
  )
}

export default Navbar
