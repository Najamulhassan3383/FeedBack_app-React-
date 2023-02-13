import React from 'react'

import {useContext} from 'react'
import {FeedBackContext} from './context/FeedBackContext'

export default function FeedBackStat({feedback}) {
    //calulte rating
    const {feedBack} = useContext(FeedBackContext);
    let avg = feedBack.reduce((acc, curr) => {return acc+curr.rating}, 0);
     avg = avg/feedBack.length;

     

    
  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating: {avg ? avg: 0}</h4>

      
    </div>
  )
}
// FeedBackStat.propType = {
//     feedback: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         rating: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired
//     })).isRequired
    
// }
//not required because we are using context api
