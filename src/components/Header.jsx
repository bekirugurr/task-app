import React from 'react'

const Header = ({isTableVisible, setIsTableVisible}) => {
  return (
    <div className='mx-5 mt-4'>
        <button className='me-3 border-0 rounded text-light pb-2 pt-1' style={{width: '5rem', backgroundColor:'#662ba1'}} onClick={() => setIsTableVisible(!isTableVisible)} >{isTableVisible ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default Header