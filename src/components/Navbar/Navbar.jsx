import React from 'react'
import shoppingCart from '../../assets/shoppingCart.png'

export const Navbar = ({cart , setselectType}) => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
          <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            daisyUI
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => setselectType("products")}>
                Products
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">

          <div className="flex items-center gap-2 cursor-pointer"
            onClick={() => setselectType("cart")}
          >
            <img src={shoppingCart} />
            <span>({cart.length})</span>
          </div>

          <h1>Login</h1>

          <a className="btn rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full">
            Get Started
          </a>

        </div>

      </div>
    </div>
  )
}