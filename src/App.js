
import './App.css';
import NavLayout from "./Components/NavLayout"
import Home from "./Components/Home"
import DailyDiaryForm from "../src/Components/DailyDiaryForm"
import {BrowserRouter as Router , Route} from "react-router-dom"

function App(props) {

  return (
    <div className="App">
      <Router>
        <NavLayout />
        <Route path="/" exact component={Home}></Route>
        <Route path="/dailydiary/:id" exact component={DailyDiaryForm}  ></Route> 
      </Router>
    </div>
  );
}

export default App;
