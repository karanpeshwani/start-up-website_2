// npm start

//Import CSS
import "./styles/app_styles.css";

//Import React Router
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes  } from "react-router-dom";
// Import Components
// import NavBar from "./components/NavBar";
import Login_Page from "./components/Login_Page";
import Top_Designs from "./components/Top_Designs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Login_Page />
      {/* <Routes>
        <Route exact path="/" component={Top_Designs} />
        <Route exact path="/login" component={Login_Page} />
      </Routes> */}
    </div>
  );
}

export default App;


//hello world