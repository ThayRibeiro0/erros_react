import React from 'react'

const MyComponents = ({ age, isAvailable }) => {
  return (
    <div>
        {/* {age} */}
        <p>Component</p>
        {age === 30 && <h2>Your age it is 30</h2>}
        {!isAvailable && <p>You are not available</p>}
    </div>
  )
}

export default MyComponents