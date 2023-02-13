
import React from 'react'
import Card from './shared/Card'
import { FaTimesCircle } from 'react-icons/fa';
import {useContext} from 'react'
import {FeedBackContext} from './context/FeedBackContext'




export default function FeedBack({r}) {
  const { handleDelete} = useContext(FeedBackContext);
    
   
   

  return (
    <Card >
        <div className="num-display" >{r.rating}</div>
        <button className="close" onClick={()=> handleDelete(r.id)}>
          
            <FaTimesCircle color='purple'/>
        </button>
        <div className="text-display">{r.text}</div>
        
    </Card>
  )
}

