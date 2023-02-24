import React from 'react'

const Header = ({ user, handleSignOut }) => {
  return (
    <div className='h-20 bg-slate-500' id='main-container'>
        <div className='relative max-w-7xl m-auto px-5 xl:px-0 flex text-center flex-wrap justify-between items-center' id='wrapper'>
            <div className='mx-auto sm:mx-0 text-center w-full' id='logo'>
                <p className='text-3xl font-bold text-gray-50 py-5'>Die Bibliothek</p>
            </div>
            {user && (
              <div className='mx-auto px-5 sm:mb-0 sm:mx-5 mb-2'>
                <button className='text-white text-lg text-center w-full hover:text-red-400' onClick={handleSignOut}>Sign Out</button>
              </div>
            )}
        </div>  
    </div>
  )
}

export default Header