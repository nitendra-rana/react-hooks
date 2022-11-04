import React from 'react'
import "./Navigation.css"



const Navigation = () => {
  return (
    <div className='Nav'>
      <div className="logo"><h3>React-hooks</h3></div>
      <div className='item'>useState</div>
      <div className='item'>useReducer</div>
      <div className='item'>useEffect</div>
      <div className='item'>useLayout</div>
      <div className='item'>useRef</div>
      <div className='item'>useContext</div>
      <div className='item'>useMemo</div>
    </div>
  )
}

export default Navigation
