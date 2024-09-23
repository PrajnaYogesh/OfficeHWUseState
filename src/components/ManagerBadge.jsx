import React from 'react'
import '../App.css'

function ManagerBadge({name,image,position,setManager}) {
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
  setManager({
    name: name,
    position:position,
    image: image
  })
}}>Nominate</button>
</div>
    </>
  )
}

export default ManagerBadge