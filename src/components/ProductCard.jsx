import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-blue-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center space-y-2'>
      <img onClick={()=>window.location = `/detail/${prd.id}`} className="h-32 object-cover" src={prd?.image} alt="" />
      <div className='font-bold h-16 text-center mt-2 '> {(prd?.title).substring(0,30)}... </div>
      <div className='text-center opacity-70 text-sm'>{(prd?.description).substring(0,25)} ... </div>
      <div className='font-bold text-lg'> ${prd?.price} </div>
      <button className='bg-blue-600 w-full p-2 rounded-lg text-white'> ADD TO CART </button>
    </div>
  )
}

export default ProductCard