import "./App.css";
import Header from "./components/Header";

import FeedBackList from "./components/FeedBackList";

import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedBackStat from "./components/FeedBackStat";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIcon from "./components/shared/AboutIcon";

let a = 3;

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };
  const handleAdd = (newEntry) => {
    a++;
    newEntry.id = a;
    const newf = [...feedback, newEntry];
    setFeedback(newf);
  };

  return (
    <>
      <Router>
        <Header text="FeedBack UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm add={handleAdd} />
                  <FeedBackStat feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={handleDelete}
                  />
                </>
              }
            >
              {/* <AboutPage /> */}
            </Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </>
  );
}

export default App;
