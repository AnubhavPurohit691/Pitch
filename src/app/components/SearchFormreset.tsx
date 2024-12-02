'use client'
import React from 'react'

const SearchFormreset = ({onreset}:{onreset:()=>void}) => {
    
  return (
    <button type='reset' onClick={onreset} className='text-white p-6 bg-red-500'>
        x
    </button>
  )
}
   
export default SearchFormreset
