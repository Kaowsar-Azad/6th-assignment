import React from 'react'

export const Cart = ({cart , setcart , setselectType}) => {
  return (
    <div className='max-w-2xl mx-auto'>

      {/* 🔥 Top Toggle Section (NEW ADD) */}
      <div className='text-center space-y-2.5 mt-4 '>
        <h1 className='font-bold text-4xl'>Premium Digital Tools</h1>

        <div className='flex text-center justify-around px-2 py-2 m-auto shadow-2xl rounded-2xl w-[200px] h-[58px] border-white border-1'>

          <button 
            onClick={() => setselectType("products")}
            className='px-3 py-1 rounded-xl font-semibold text-gray-700'>
            Products
          </button>

          <button 
            className='bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white px-3 py-1 rounded-xl font-semibold'>
            Cart({cart.length})
          </button>

        </div>
      </div>

      {/* 🛒 Cart Content */}
      <h2 className='font-bold text-center text-3xl mb-6 mt-6'>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className='flex items-center justify-between mb-4 p-4 bg-gray-100 shadow-2xl rounded-2xl'>
          
          <img className='w-12 h-12 rounded-lg object-cover' src={item.image} />

          <div className='flex flex-col gap-1 flex-1 ml-3'>
            <h3 className='font-semibold text-sm'>{item.title}</h3>
            <p className='text-gray-500 text-sm'>${item.price}</p>
          </div>

          <button 
            onClick={() => {
              const filtered = cart.filter(i => i.id !== item.id)
              setcart(filtered)
            }}
            className='text-red-500 text-sm'>
            Remove
          </button>

        </div>
      ))}

      <div className='flex justify-between mt-4 font-semibold'>
        <span>Total:</span>
        <span>${cart.reduce((sum, item) => sum + item.price, 0)}</span>
      </div>

      <button className='w-full mt-6 py-3 bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white rounded-xl font-semibold'>
        Proceed To Checkout
      </button>

    </div>
  )
}