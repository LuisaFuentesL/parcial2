import './App.css';
import Bands from "./components/bands"
import Detail from "./components/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bands />} />
         <Route path="/bands" element={<Bands />} />
         <Route path="/bands/:bandId" element={<Detail />} />

       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
