'use client'
import { X } from 'lucide-react'
import React from 'react'

const SearchFormreset = ({onreset}:{onreset:()=>void}) => {
    
  return (
    <button type='reset' onClick={onreset} className='text-white p-3 rounded-md bg-red-500'>
        <X className='size-5' />
    </button>
  )
}
   
export default SearchFormreset
