
import React from 'react'
import Card from './shared/Card'
import { FaTimesCircle } from 'react-icons/fa';




export default function FeedBack({r, handleClick}) {
    
   
   

  return (
    <Card >
        <div className="num-display" >{r.rating}</div>
        <button className="close" onClick={()=> handleClick(r.id)}>
          
            <FaTimesCircle color='purple'/>
        </button>
        <div className="text-display">{r.text}</div>
        
    </Card>
  )
}

