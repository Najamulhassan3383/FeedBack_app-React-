import React from 'react'
import FeedBack from './FeedBack'

import { useContext } from 'react'
import { FeedBackContext } from './context/FeedBackContext'


export default function FeedBackList({ handleDelete}) {
   const {feedBack} = useContext(FeedBackContext);
  //  console.log(feedBack);



    if(!feedBack || feedBack.length === 0) return <p>No feedback, sorry</p>
  return (
    <div className='feedback-list'>
        {feedBack.map((item) => {
            // console.log(item);
            return <FeedBack r = {item} key = {item.id}/>
        })
        }
    </div>
  )
}


// FeedBackList.propTypes = {
//   feedback: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired
//       })
//   ).isRequired

// }

//this is not required because we are using context api
