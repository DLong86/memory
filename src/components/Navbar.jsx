import React, {useState} from 'react'
import {FaGripLines} from "react-icons/fa"
import {CgClose} from "react-icons/cg"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [active, setActive] = useState(false)
    

    const handleActive = () => {
        setActive(!active)
    }

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="">
        <div className='flex items-center justify-between w-full h-20 mt-0 text-white px-5'>
            <h1 className='font-bold text-2xl text-[#e936a7] md:text-4xl hover:text-white duration-200 cursor-pointer'>TALK.</h1>
            <ul className='hidden sm:flex sm:flex-row sm:gap-6 text-md font-bold uppercase cursor-pointer'>
                <li className='hover:text-[#e936a7]'>Home</li>
                <li className='hover:text-[#e936a7]'>about</li>
                <li className='hover:text-[#e936a7]'>Games</li>
                <li className='hover:text-[#e936a7]'>Contact</li>
            </ul>
            <div className="sm:hidden" onClick={handleActive}>
                {!active ? <FaGripLines size={20} className='cursor-pointer hover:text-[#e936a7]' onClick={handleNav} /> : <CgClose size={25} className='cursor-pointer font-extrabold hover:text-[#e936a7]' onClick={handleNav} />}
            </div>
        </div>
        <div className="">
        <ul className={nav ? 'sm:hidden absolute top-0 left-0 h-screen w-1/2 bg-white text-[#312f2d] pt-10 pl-5 flex flex-col items-start gap-10 ease-in duration-200 font-bold text-xl cursor-pointer' : 'absolute top-0 left-[-100%] h-screen w-1/2 pt-10 pl-5 flex flex-col items-start gap-10 ease-in duration-200 font-bold text-xl'}>
                <li className='hover:text-[#e936a7] ease-in duration-100'>Home</li>
                <li className='hover:text-[#e936a7] ease-in duration-100'>about</li>
                <li className='hover:text-[#e936a7] ease-in duration-100'>Games</li>
                <li className='hover:text-[#e936a7] ease-in duration-100'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar