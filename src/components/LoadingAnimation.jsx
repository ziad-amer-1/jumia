import React from 'react'
import LoadingAnimationIcon from '../assets/Loading_icon.gif'

function LoadingAnimation() {
  return (
    <div className='loading-container' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 200px)'
    }}>
      <img src={LoadingAnimationIcon} alt="Loading animation icon" width='170px'/>
    </div>
  )
}

export default LoadingAnimation