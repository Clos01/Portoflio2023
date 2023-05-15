import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="w-full text-white bg-[#3c8c80] dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div className="flex justify-between items-center text-white p-4 max-w-screen-xl px-4 w-full">
    <Link to="/" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</Link>
    <div className="hidden sm:hidden md:flex lg:flex justify-center space-x-[5rem] mr-[2rem]">
  <Link to='/hero'>About</Link>
  <Link to='/about'>Projects</Link>
  <Link to='/contact'>Resume</Link>
  <Link to='/help'>Contact</Link>
</div>
            
            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setMenuOpen(!menuOpen)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                { menuOpen ? 
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /> :
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
               }
              </svg>

            </button>
           
          </div>
          { /* instead of using Vue directives, we can use JavaScript logical && operator to conditionally render elements based on state */ }
          { menuOpen && (
            <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <Link to='/home'>home</Link>
            </nav>
          )}
        </div>
  );
}

export default NavBar;
