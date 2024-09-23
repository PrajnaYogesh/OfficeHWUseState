import React from 'react'
import NavItem from './NavItem'

function Navbar() {
    let themes = ["Home","About","Contact","Profile"]
  return (
    <div className='navbar'>
<NavItem title={themes[0]}/>
<NavItem title={themes[1]}/>
<NavItem title={themes[2]}/>
<NavItem title={themes[3]}/>
    </div>)

  
}

export default Navbar