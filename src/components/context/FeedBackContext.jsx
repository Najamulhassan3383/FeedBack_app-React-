import { createContext, useState } from "react";

// steps to use context api
//1. import createContext
//2. create context
//3. create provider
//4. use provider in the parent component
//5. use context in the child component


export  const FeedBackContext = createContext(); //2. create context

export const FeedBackProvider = ({ children }) => {
    const [feedBack, setFeedBack] = useState([{
        id: 1,
        text: "this is coming from context api",
        rating: 10
    },
    {
        id: 2,
        text: "this is coming from context api",
        rating: 10
    },
    {
        id: 3,
        text: "this is coming from context api",
        rating: 10
    }



]); //2. create context


    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
          const newFeedback = feedBack.filter((item) => item.id !== id);
          setFeedBack(newFeedback);
        }
      };
      let a = 3;
      const handleAdd = (newEntry) => {
        a++;
        newEntry.id = +a;
        const newf = [...feedBack, newEntry];
        setFeedBack(newf);
      };



    return (
        <FeedBackContext.Provider value = {{
            feedBack,
            handleDelete,
            handleAdd,
        }}>
            {children}
        </FeedBackContext.Provider>
    )
} //3. create provider