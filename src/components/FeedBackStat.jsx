import React from 'react'
import PropTypes from 'prop-types'

export default function FeedBackStat({feedback}) {
    //calulte rating
    let avg = feedback.reduce((acc, curr) => {return acc+curr.rating}, 0);
     avg = avg/feedback.length;

     

    
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {avg ? avg: 0}</h4>

      
    </div>
  )
}
FeedBackStat.propType = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
    
}
