import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import Rating from './Rating';

export default function FeedBackForm({add}) {
    const [text, setText]  = useState('');
    const[rating, setRating] = useState(10);
    const [isDisabled, setIsDisabled] = useState(true);
    const [testShown, setTestShown] = useState("");
    const handleChange = (e)=>{
        if(e.target.value === ''){
            setIsDisabled(true);
            setTestShown("");
        }else if(e.target.value !== '' && e.target.value.trim().length<10){
            setIsDisabled(true);
            setTestShown("Must be 10 characters or more");
        }else{
            setIsDisabled(false);
            setTestShown("");
        }



         setText(e.target.value);
        // if(e.target.value.length < 10){
        //     setIsDisabled(true);
        //     setTestShown("Must be 10 characters or more");
        // }else{
        //     setIsDisabled(false);
        //     setTestShown("");
        // }

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
      // console.log(text, rating);
      if(text.trim().length > 10){
        const newEntry = {
            text, 
            rating
        }
        add(newEntry);
        setText('');
        setRating(10);
        setIsDisabled(true);
        setTestShown("");
        

      }
        
    }
    
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you Rate your service with us?</h2>
        {/* text input */}
        <Rating select={setRating} selected={rating}/>

        <div className="input-group">
            <input onChange={handleChange} type="text" placeholder='Write a review' value={text}/>
            <Button type='submit' isDisabled = {isDisabled} >SEND</Button>
            
        </div>
        {/* <h4 style={s}>{testShown}</h4> // this is the same as below but my version */}

        {testShown && <div className='message'>{testShown}</div>}
      </form>
    </Card>
  )
}
