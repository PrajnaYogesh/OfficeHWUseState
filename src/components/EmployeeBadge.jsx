import React from 'react'
import '../App.css'

function EmployeeBadge({name,image,position,setEmployee}) {
  return (
    <>
    <div className="badge">

<div className="empName">
    {name}
</div>

<div className="empPosition">
    {position}
</div>

<div>
    <img className="empPic" src={image} alt="" />
</div>
<button onClick={()=>{
  setEmployee({
    name: name,
    position:position,
    image: image
  })
}}>Nominate</button>
</div>
    </>
  )
}

export default EmployeeBadge