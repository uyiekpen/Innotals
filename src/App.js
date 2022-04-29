import HeaderComp from "./Component/HeaderComp"
import Home from "./Component/Home";
import {BrowserRouter ,Routes,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderComp/>
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
