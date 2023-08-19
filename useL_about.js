import React from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'

const useL_about = () => {
  return (
     <>
       <div className=''>
          <BrowserRouter>
            <Routes>
                 <Route path='./about' element={<useL_about/>}/>

            </Routes>
           </BrowserRouter>
       </div>
        <Link to={'/about'}/>
     </>
  )
}

export default useL_about