import React from 'react'

export default function Products({name,imagePath}) { //name,imagePath를 가져옴 => type.jsx로부터

  return (
    <div>
        <img 
        style={{width:"75%"}} 
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`} />

        <form style={{marginTop:"10px"}}>
            <label style={{textAlign:"right"}}>{name}</label>
            <input style={{marginLeft:"7"}}
                    type="number"
                    name="quantity"
                    min="0"
                    defalutValue={0} 
            />
        </form>
    </div>
  )
}
