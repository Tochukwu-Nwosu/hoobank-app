import React, { useState } from 'react'
import { logo, close, menu} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => (
    setToggle(prev => !prev)
  )

  return (
    <nav className='w-full py-6 flex justify-between items-center'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      <ul className='hidden sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-poppins cursor-pointer text-[16px] text-gray-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-gray-500`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* navbar for mobile */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} alt='toggle' 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={handleToggle} 
          />
          <div 
            className={`${toggle ? 'flex sidebar' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className='flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li 
                  key={nav.id} 
                  className={`font-poppins cursor-pointer text-[16px] text-gray-100 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} hover:text-gray-500`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
