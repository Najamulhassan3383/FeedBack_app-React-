import React from 'react'
import FeedBack from './FeedBack'
import PropTypes from 'prop-types'


export default function FeedBackList({feedback, handleDelete}) {


    if(!feedback || feedback.length === 0) return <p>No feedback, sorry</p>
  return (
    <div className='feedback-list'>
        {feedback.map((item) => {
            // console.log(item);
            return <FeedBack r = {item} key = {item.id} handleClick = {handleDelete}/>
        })
        }
    </div>
  )
}


FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
      })
  ).isRequired

}
