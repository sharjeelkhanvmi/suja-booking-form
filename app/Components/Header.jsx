import React, { Fragment, useState } from 'react'
import Logo from '../assets/images/logo-black.png';

function classNames(...classes) 
{
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white-de">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true">&rarr;</span> Go back </a> */}
              <a href="#" className="-m-1.5 p-1.5 justify-center"> 
                <img className="h-15 w-auto" src={Logo} alt="" /> 
              </a>
            </div>
      </nav>
    </header>
  )
}
