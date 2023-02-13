import "./App.css";
import Header from "./components/Header";

import FeedBackList from "./components/FeedBackList";


import FeedBackStat from "./components/FeedBackStat";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./Pages/AboutPage";
import { FeedBackProvider } from "./components/context/FeedBackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIcon from "./components/shared/AboutIcon";



function App() {
 



  return (
    <FeedBackProvider>
      <Router>
        <Header text="FeedBack UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStat />
                  <FeedBackList />
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
    </FeedBackProvider>
  );
}

export default App;
