import React from 'react'
import {MdNightsStay, MdWbSunny} from 'react-icons/md'

const Header = ({darkMode, setDarkMode}) => {
  return (
  <header className='text-gray-900 bg-white dark:bg-gray-900 dark:text-teal-400'>
    <nav className='flex items-center justify-between p-5'>
        <h1 className='text-lg'>Habib's Website</h1>
        <div onClick={() => setDarkMode(!darkMode)}>
            {
                darkMode?
                <MdWbSunny className="text-2xl cursor-pointer" />
                :
                <MdNightsStay className="text-2xl cursor-pointer" />
            }
            
        </div>
    </nav>
  </header>
  )
 
}

export default Header
