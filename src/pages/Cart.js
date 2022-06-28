import React from 'react'

const Cart = () => {
  return (
    <div className='bg-base-200 py-12'>
    <div className='container max-w-screen-lg mx-auto pb-10 text-primary bg-white px-7 py-4 rounded-2xl'>
        <h2 className='pb-5 text-lg font-bold'>Shopping Cart</h2>
        {/* display if no items */}
        <p>No Items Currently in Your Cart</p>
        
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <span className=''>Print Name</span>
            <span className='flex md:justify-center'>Price</span>
            <span className='flex md:justify-end'>- 0 +</span>
        </div>

        
        <div className='controls mt-7 flex justify-end'>
        <p className='mr-4'>Cart Total</p>
        <button className='btn btn-sm btn-primary text-base-100'>Checkout</button>
        </div>
    </div>
    </div>
  )
}

export default Cart;