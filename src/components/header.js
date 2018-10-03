import React from 'react'
import { Link } from 'gatsby'
// import { css } from 'emotion'

const Header = props => (
  <div className="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center">
    <div className="w-full max-w-screen-xl relative mx-auto px-6">
      <div className="flex items-center -mx-6">
        <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8" />
        <nav className="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
          <div className="w-full lg:px-4 lg:w-3/4">
            <Link to="/" className="no-underline">
              <span className="font-semibold text-xl tracking-loose">
                {props.siteTitle}
              </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-blue-lighter mr-4"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
