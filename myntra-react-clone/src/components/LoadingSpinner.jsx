import React from 'react'

function LoadingSpinner() {
  return (
   
       <div className="d-flex justify-content-center spinner">
       <div className="spinner-border" style={{width:"2rem",height:"2rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
      
    
  )
}

export default LoadingSpinner;
